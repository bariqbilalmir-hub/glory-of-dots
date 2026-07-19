export class Renderer {
 constructor(canvas){
  this.canvas=canvas;
  this.ctx=canvas.getContext('2d');
  this.resize();
  window.addEventListener('resize',()=>this.resize());
 }
 resize(){this.canvas.width=innerWidth;this.canvas.height=innerHeight;}
 render(nodes=[],selected=null,troops=[]){
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  for(const node of nodes){node.draw(this.ctx,node===selected);}
  for(const troop of troops){troop.draw(this.ctx);}
 }
}