export class Movement {
 constructor(game){
  this.game=game;
  this.selectedSource=null;
 }

 selectNode(node){
  this.selectedSource=node;
 }

 moveTo(target){
  if(!this.selectedSource || !target) return false;
  if(this.selectedSource===target) return false;

  const amount=Math.floor(this.selectedSource.troops/2);
  if(amount<=0) return false;

  this.selectedSource.troops-=amount;

  if(target.owner===this.selectedSource.owner){
   target.troops+=amount;
  } else {
   target.troops-=amount;
   if(target.troops<=0){
    target.owner=this.selectedSource.owner;
    target.troops=amount;
   }
  }

  this.selectedSource=null;
  return true;
 }
}
