export class Troop {
 constructor(from,to,owner,count=1){
  this.x=from.x; this.y=from.y;
  this.target=to;
  this.owner=owner;
  this.count=count;
  this.speed=2;
  this.done=false;
 }
 update(){
  const dx=this.target.x-this.x;
  const dy=this.target.y-this.y;
  const distance=Math.hypot(dx,dy);
  if(distance<3){this.done=true; return;}
  this.x += dx/distance*this.speed;
  this.y += dy/distance*this.speed;
 }
 draw(ctx){
  ctx.fillStyle=this.owner==='player'?'#3498db':'#e74c3c';
  ctx.beginPath();
  ctx.arc(this.x,this.y,6,0,Math.PI*2);
  ctx.fill();
 }
}