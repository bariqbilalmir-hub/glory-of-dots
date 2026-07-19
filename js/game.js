import { Renderer } from './renderer.js';
import { createMap } from './map.js';
import { Input } from './input.js';

export class Game {
 constructor(canvas){
  this.canvas=canvas;
  this.renderer=new Renderer(canvas);
  this.nodes=createMap();
  this.input=new Input(canvas);
  this.selected=null;
  canvas.addEventListener('click',()=>this.selectNode());
 }
 selectNode(){
  this.selected=this.nodes.find(n=>n.contains(this.input.mouse.x,this.input.mouse.y)) || null;
 }
 start(){this.loop();}
 loop(){
  this.renderer.render(this.nodes,this.selected);
  requestAnimationFrame(()=>this.loop());
 }
}