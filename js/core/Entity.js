export class Entity {
 constructor(id,x,y){
  this.id=id;
  this.x=x;
  this.y=y;
  this.active=true;
 }

 update(){}

 destroy(){
  this.active=false;
 }
}
