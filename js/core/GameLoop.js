export class GameLoop {
 constructor(game){
  this.game=game;
  this.running=false;
 }
 start(){
  this.running=true;
  requestAnimationFrame(this.frame.bind(this));
 }
 frame(time){
  if(!this.running) return;
  this.game.tick(time);
  requestAnimationFrame(this.frame.bind(this));
 }
 stop(){
  this.running=false;
 }
}
