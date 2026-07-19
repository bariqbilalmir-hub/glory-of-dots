export class TroopSystem {
 constructor(){
  this.reinforcementRate=1;
 }

 reinforce(territory){
  if(territory) territory.units+=this.reinforcementRate;
 }

 transfer(from,to,count){
  if(!from||!to||from.units<count) return false;
  from.units-=count;
  to.units+=count;
  return true;
 }
}
