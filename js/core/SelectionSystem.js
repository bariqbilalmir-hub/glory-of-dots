export class SelectionSystem {
 constructor(){
  this.selected=null;
 }
 select(object){
  this.selected=object;
 }
 clear(){
  this.selected=null;
 }
}
