import { Renderer } from './renderer.js';
import { createMap } from './map.js';
import { Input } from './input.js';
import { Troop } from './troop.js';
import { AI } from './ai.js';
import { UI } from './ui.js';
import { Menu } from './menu.js';

export class Game {
 constructor(canvas){
  this.canvas=canvas;
  this.renderer=new Renderer(canvas);
  this.nodes=createMap();
  this.input=new Input(canvas);
  this.selected=null;
  this.troops=[];
  this.ai=new AI();
  this.ui=new UI();
  this.menu=new Menu(this);
  canvas.addEventListener('click',()=>this.handleClick());
 }
 restart(){
  this.nodes=createMap();
  this.troops=[];
  this.selected=null;
  this.ui.status='';
  this.menu.visible=false;
 }
 sendTroop(from,to,owner){this.troops.push(new Troop(from,to,owner));}
 handleClick(){
  if(this.menu.visible){this.menu.start();return;}
  const node=this.nodes.find(n=>n.contains(this.input.mouse.x,this.input.mouse.y));
  if(!node)return;
  if(this.selected&&this.selected!==node&&this.selected.owner==='player'&&this.selected.units>0){
   this.selected.units--;
   this.sendTroop(this.selected,node,'player');
  } else this.selected=node;
 }
 update(){
  this.nodes.forEach(n=>n.update());
  this.ai.update(this);
  this.troops.forEach(t=>t.update());
  this.troops.filter(t=>t.done).forEach(t=>{
   if(t.target.owner!==t.owner){t.target.units--;if(t.target.units<=0){t.target.owner=t.owner;t.target.units=1;}}
   else t.target.units++;
  });
  this.troops=this.troops.filter(t=>!t.done);
  this.ui.update(this);
 }
 loop(){
  this.update();
  this.renderer.render(this.nodes,this.selected,this.troops);
  this.ui.draw(this.renderer.ctx);
  this.menu.draw(this.renderer.ctx);
  requestAnimationFrame(()=>this.loop());
 }
 start(){this.loop();}
}