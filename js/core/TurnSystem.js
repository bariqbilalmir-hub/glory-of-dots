export class TurnSystem {
 constructor(){
  this.turn=1;
  this.currentPlayer=0;
 }
 nextTurn(players){
  this.currentPlayer=(this.currentPlayer+1)%players.length;
  this.turn++;
 }
}
