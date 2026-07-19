export class Camera {
 constructor(){
  this.x=0;
  this.y=0;
  this.zoom=1;
 }
 move(dx,dy){
  this.x+=dx;
  this.y+=dy;
 }
 setZoom(value){
  this.zoom=Math.max(0.5,Math.min(3,value));
 }
 worldToScreen(point){
  return {x:(point.x-this.x)*this.zoom,y:(point.y-this.y)*this.zoom};
 }
}
