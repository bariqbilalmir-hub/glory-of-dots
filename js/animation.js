export class MovementAnimation {
 constructor(from,to){
  this.x=from.x;
  this.y=from.y;
  this.target=to;
  this.progress=0;
 }

 update(){
  this.progress=Math.min(1,this.progress+0.04);
  this.x+=(this.target.x-this.x)*0.04;
  this.y+=(this.target.y-this.y)*0.04;
  return this.progress>=1;
 }
}
