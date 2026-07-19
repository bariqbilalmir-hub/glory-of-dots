import { Renderer } from './renderer.js';
import { createMap } from './map.js';
import { Input } from './input.js';
import { Troop } from './troop.js';

export class Game {
 constructor(canvas){
  this.canvas=canvas;
  this.renderer=new Renderer(canvas);
  this.nodes=createMap();
  this.input=new Input(canvas);
  this.selected=null;
  this.troops=[];
  canvas.addEventListener('click',()=>this.handleClick());
 }
 handleClick(){
  const node=this.nodes.find(n=>n.contains(this.input.mouse.x,this.input.mouse.y));
  if(!node) return;
  if(this.selected && this.selected!==node){
   this.selected.units=Math.max(0,this.selected.units-1);
   this.troops.push(new Troop(this.selected,node,'player'));
  } else {
   this.selected=node;
  }
 }
 update(){
  for(const troop of this.troops){troop.update();}
  this.troops=this.troops.filter(t=>!t.done);
 }
 loop(){
  this.update();
  this.renderer.render(this.nodes,this.selected,this.troops);
  requestAnimationFrame(()=>this.loop());
 }
 start(){this.loop();}
}