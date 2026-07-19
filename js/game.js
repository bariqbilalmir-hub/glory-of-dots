import { Renderer } from './renderer.js';
import { createMap } from './map.js';
import { Input } from './input.js';
import { Troop } from './troop.js';
import { AI } from './ai.js';

export class Game {
 constructor(canvas){
  this.canvas=canvas;
  this.renderer=new Renderer(canvas);
  this.nodes=createMap();
  this.input=new Input(canvas);
  this.selected=null;
  this.troops=[];
  this.ai=new AI();
  canvas.addEventListener('click',()=>this.handleClick());
 }
 sendTroop(from,to,owner){
  this.troops.push(new Troop(from,to,owner));
 }
 handleClick(){
  const node=this.nodes.find(n=>n.contains(this.input.mouse.x,this.input.mouse.y));
  if(!node) return;
  if(this.selected && this.selected!==node){
   if(this.selected.owner==='player' && this.selected.units>0){
    this.selected.units--;
    this.sendTroop(this.selected,node,'player');
   }
  } else this.selected=node;
 }
 update(){
  this.ai.update(this);
  for(const troop of this.troops) troop.update();
  for(const troop of this.troops){
   if(troop.done){
    if(troop.target.owner!==troop.owner){
     troop.target.units--;
     if(troop.target.units<=0){
      troop.target.owner=troop.owner;
      troop.target.units=1;
     }
    } else troop.target.units++;
   }
  }
  this.troops=this.troops.filter(t=>!t.done);
 }
 loop(){
  this.update();
  this.renderer.render(this.nodes,this.selected,this.troops);
  requestAnimationFrame(()=>this.loop());
 }
 start(){this.loop();}
}