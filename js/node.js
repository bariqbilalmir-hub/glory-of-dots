export class DotNode {
 constructor(x,y,owner='neutral'){
  this.x=x; this.y=y; this.owner=owner; this.units=10; this.radius=35;
 }
 draw(ctx,selected=false){
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
  ctx.fillStyle=this.owner==='player'?'#3498db':this.owner==='bot'?'#e74c3c':'#777';
  ctx.fill();
  if(selected){ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();}
  ctx.fillStyle='#fff';ctx.font='16px Arial';ctx.textAlign='center';
  ctx.fillText(this.units,this.x,this.y+5);
 }
 contains(px,py){return Math.hypot(px-this.x,py-this.y)<this.radius;}
}