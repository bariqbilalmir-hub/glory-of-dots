export class GameEvents {
 constructor(){
  this.listeners={};
 }
 on(event,callback){
  (this.listeners[event]??=[]).push(callback);
 }
 emit(event,data){
  (this.listeners[event]||[]).forEach(cb=>cb(data));
 }
}
