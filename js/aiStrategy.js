export function evaluateBoard(game){
 const nodes=game.nodes||[];
 const owned=nodes.filter(n=>n.owner==='ai');
 const targets=nodes.filter(n=>n.owner!=='ai');

 if(!owned.length||!targets.length) return null;

 const strongest=owned.reduce((a,b)=>(a.units||0)>(b.units||0)?a:b);
 const target=targets.reduce((a,b)=>(a.units||0)<(b.units||0)?a:b);

 return {from:strongest,to:target};
}
