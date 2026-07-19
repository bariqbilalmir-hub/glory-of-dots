export class EconomySystem {
 constructor(){
  this.incomeRate=1;
 }

 calculateIncome(player){
  return (player.territories?.length || 0) * this.incomeRate;
 }

 applyIncome(player){
  player.resources=(player.resources||0)+this.calculateIncome(player);
 }
}
