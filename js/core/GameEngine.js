export class GameEngine {
 constructor(){
  this.state='menu';
  this.nodes=[];
  this.players=[];
  this.lastUpdate=0;
 }

 start(){
  this.state='playing';
 }

 update(time){
  const delta=time-this.lastUpdate;
  this.lastUpdate=time;
  return delta;
 }

 setMap(nodes){
  this.nodes=nodes;
 }
}
