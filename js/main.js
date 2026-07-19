import { startGameLoop } from './mainLoop.js';
import { TurnManager } from './turnManager.js';
import { GameState } from './gameState.js';
import { generateTroops } from './troops.js';

export function initializeGame(game){
 game.state = new GameState();
 game.turnManager = new TurnManager(game);

 setInterval(()=>{
  if(game.state.status==='playing'){
   generateTroops(game.nodes);
  }
 },5000);

 startGameLoop(game);
}
