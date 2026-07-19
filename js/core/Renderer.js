export class Renderer {
 constructor(canvas){
  this.canvas=canvas;
  this.ctx=canvas?.getContext('2d');
 }

 render(nodes=[]){
  if(!this.ctx) return;

  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

  nodes.forEach(node=>{
   this.ctx.beginPath();
   this.ctx.arc(node.x,node.y,node.radius||25,0,Math.PI*2);
   this.ctx.fillStyle=node.owner==='player'?'#3498db':'#e74c3c';
   this.ctx.fill();
  });
 }
}
