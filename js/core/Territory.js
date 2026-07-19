export class Territory {
 constructor(id,x,y){
  this.id=id;
  this.x=x;
  this.y=y;
  this.owner='neutral';
  this.units=10;
  this.neighbours=[];
 }
 capture(owner){ this.owner=owner; }
}
