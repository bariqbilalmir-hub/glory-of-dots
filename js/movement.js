export class Movement {
 constructor(game){
  this.game=game;
  this.selectedSource=null;
 }

 selectNode(node){
  this.selectedSource=node;
 }

 moveTo(target){
  if(!this.selectedSource || !target || this.selectedSource===target) return false;

  const amount=Math.floor(this.selectedSource.units/2);
  if(amount<=0) return false;

  this.selectedSource.units-=amount;

  if(target.owner===this.selectedSource.owner){
   target.units+=amount;
  } else {
   target.units-=amount;
   if(target.units<=0){
    target.owner=this.selectedSource.owner;
    target.units=amount;
   }
  }

  this.selectedSource=null;
  return true;
 }
}
