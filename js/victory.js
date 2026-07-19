export function checkVictory(nodes, player='player'){
 const aliveOwners=[...new Set(nodes.map(n=>n.owner))];

 if(aliveOwners.length===1){
  return aliveOwners[0]===player ? 'victory' : 'defeat';
 }

 return 'playing';
}
