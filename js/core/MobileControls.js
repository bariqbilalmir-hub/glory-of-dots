export class MobileControls {
 constructor(){
  this.touchStart=null;
 }
 startTouch(x,y){
  this.touchStart={x,y};
 }
 endTouch(x,y){
  if(!this.touchStart) return null;
  const action={dx:x-this.touchStart.x,dy:y-this.touchStart.y};
  this.touchStart=null;
  return action;
 }
}
