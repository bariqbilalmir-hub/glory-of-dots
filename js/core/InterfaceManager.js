export class InterfaceManager {
 constructor(){
  this.visible=true;
  this.elements={};
 }
 register(name,data){
  this.elements[name]=data;
 }
 toggle(){
  this.visible=!this.visible;
 }
}
