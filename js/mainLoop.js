export function startGameLoop(game){
 function loop(){
  if(game.state.status==='playing'){
   if(game.ai) game.ai.update(game);
   if(game.turnManager) game.turnManager.update();
  }

  requestAnimationFrame(loop);
 }

 loop();
}
