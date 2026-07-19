export function checkVictory(game){
 const owners=[...new Set(game.nodes.map(n=>n.owner))];

 if(owners.length===1){
  return owners[0];
 }

 return null;
}
