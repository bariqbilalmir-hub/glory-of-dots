export class AIPlayer {
 constructor(difficulty='normal'){
  this.difficulty=difficulty;
 }

 chooseAction(game){
  const enemies=game.nodes.filter(n=>n.owner!=='ai');
  const owned=game.nodes.filter(n=>n.owner==='ai');

  if(!owned.length || !enemies.length) return null;

  const attacker=owned.sort((a,b)=>(b.units||0)-(a.units||0))[0];
  const target=enemies.sort((a,b)=>(a.units||0)-(b.units||0))[0];

  if(attacker.units>target.units){
   return {from:attacker,to:target};
  }

  return null;
 }
}
