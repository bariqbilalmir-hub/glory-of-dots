export function renderNodes(ctx,nodes){
 ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

 nodes.forEach(node=>{
  ctx.beginPath();
  ctx.arc(node.x,node.y,node.radius||20,0,Math.PI*2);
  ctx.fillStyle=node.owner==='player'?'#3498db':'#e74c3c';
  ctx.fill();

  ctx.fillStyle='#ffffff';
  ctx.font='14px Arial';
  ctx.fillText(node.units||0,node.x-8,node.y+5);
 });
}
