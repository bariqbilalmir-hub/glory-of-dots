export class AI {
 constructor(owner='bot'){
  this.owner=owner;
  this.timer=0;
 }
 update(game){
  this.timer++;
  if(this.timer%180!==0) return;

  const own=game.nodes.filter(n=>n.owner===this.owner);
  const targets=game.nodes.filter(n=>n.owner!=='bot');
  if(!own.length || !targets.length) return;

  const source=own[0];
  const target=targets[Math.floor(Math.random()*targets.length)];
  if(source.units>1){
   source.units--;
   game.sendTroop(source,target,this.owner);
  }
 }
}