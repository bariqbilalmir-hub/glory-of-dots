export class InputController {
 constructor(){
  this.selected=null;
 }

 select(target){
  this.selected=target;
 }

 clear(){
  this.selected=null;
 }
}
