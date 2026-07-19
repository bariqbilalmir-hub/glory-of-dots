export function connectMobileCombat(game, controls){
 game.attack=(from,to)=>{
  if(from && to && controls?.performAttack){
   controls.performAttack(from,to);
  }
 };
}
