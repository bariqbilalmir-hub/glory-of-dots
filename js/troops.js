export function generateTroops(nodes){
 nodes.forEach(node=>{
  if(node.units !== undefined && node.owner){
   node.units += 1;
  }
 });
}
