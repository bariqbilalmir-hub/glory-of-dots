export class AI {
 constructor(owner='bot', difficulty=null){
  this.owner=owner;
  this.timer=0;
  this.difficulty=difficulty || {botDelay:150, aggression:0.7};
 }
 update(game){
  this.timer++;
  if(this.timer%this.difficulty.botDelay!==0)return;
  const own=game.nodes.filter(n=>n.owner===this.owner);
  const enemies=game.nodes.filter(n=>n.owner!=='bot');
  if(!own.length||!enemies.length)return;
  const source=own.sort((a,b)=>b.units-a.units)[0];
  const target=enemies.sort((a,b)=>a.units-b.units)[0];
  if(source.units>2){
   source.units--;
   game.sendTroop(source,target,this.owner);
  }
 }
}