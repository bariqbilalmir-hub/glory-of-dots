export class GameState {
 constructor(){
  this.status='playing';
  this.turn='player';
 }

 switchTurn(){
  this.turn=this.turn==='player'?'ai':'player';
 }

 endGame(result){
  this.status=result;
 }
}
