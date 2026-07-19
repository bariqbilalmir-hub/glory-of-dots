export class Renderer {
 constructor(canvas){
  this.canvas=canvas;
  this.ctx=canvas.getContext('2d');
  this.resize();
  window.addEventListener('resize',()=>this.resize());
 }
 resize(){this.canvas.width=innerWidth;this.canvas.height=innerHeight;}
 render(nodes=[],selected=null,troops=[],effects=null){
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  this.ctx.fillStyle='#18202b';
  this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
  for(const node of nodes) node.draw(this.ctx,node===selected);
  for(const troop of troops) troop.draw(this.ctx);
  if(effects) effects.draw(this.ctx);
 }
}