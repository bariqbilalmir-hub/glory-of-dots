import { checkVictory } from './victory.js';

export class TurnManager {
 constructor(game){
  this.game=game;
 }

 update(){
  const result=checkVictory(this.game.nodes,'player');

  if(result!=='playing'){
   this.game.state.endGame(result);
   this.showResult(result);
  }
 }

 showResult(result){
  const panel=document.getElementById('node-info');
  if(panel){
   panel.innerHTML=`<h2>${result.toUpperCase()}</h2><button onclick="location.reload()">Restart</button>`;
  }
 }
}
