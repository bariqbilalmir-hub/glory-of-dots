import { AIPlayer } from './ai.js';

export class AIManager {
 constructor(){
  this.player=new AIPlayer('normal');
 }

 update(game){
  const action=this.player.chooseAction(game);
  if(action && game.attack){
   game.attack(action.from,action.to);
  }
 }
}
