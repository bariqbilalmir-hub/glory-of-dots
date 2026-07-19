export class Camera {
 constructor(){
  this.x=0;
  this.y=0;
  this.zoom=1;
 }

 apply(ctx){
  ctx.setTransform(this.zoom,0,0,this.zoom,-this.x*this.zoom,-this.y*this.zoom);
 }

 reset(ctx){
  ctx.setTransform(1,0,0,1,0,0);
 }

 move(dx,dy){
  this.x+=dx;
  this.y+=dy;
 }

 setZoom(value){
  this.zoom=Math.max(0.5,Math.min(3,value));
 }
}
