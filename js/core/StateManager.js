export class StateManager {
 constructor(){
  this.states={};
  this.current=null;
 }

 add(name,data){
  this.states[name]=data;
 }

 switch(name){
  if(this.states[name]) this.current=name;
 }

 get(){
  return this.states[this.current];
 }
}
