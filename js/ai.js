export class AI {
 constructor(owner='bot'){
  this.owner=owner;
  this.timer=0;
 }

 update(game){
  this.timer++;
  if(this.timer % 150 !== 0) return;

  const own=game.nodes.filter(n=>n.owner===this.owner);
  const enemies=game.nodes.filter(n=>n.owner!==this.owner);

  if(!own.length || !enemies.length) return;

  const source=own.sort((a,b)=>b.units-a.units)[0];
  const target=enemies.sort((a,b)=>a.units-b.units)[0];

  if(source.units>2){
   const attack=Math.floor(source.units/2);
   source.units-=attack;
   target.units-=attack;

   if(target.units<=0){
    target.owner=this.owner;
    target.units=attack;
   }
  }
 }
}
