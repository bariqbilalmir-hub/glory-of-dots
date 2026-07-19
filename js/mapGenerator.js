export function generateMap(size=20){
 const nodes=[];

 for(let i=0;i<size;i++){
  nodes.push({
   id:i,
   x:100+(i%5)*150,
   y:100+Math.floor(i/5)*150,
   radius:25,
   units:10+Math.floor(Math.random()*20),
   owner:i===0?'player':'neutral'
  });
 }

 return nodes;
}
