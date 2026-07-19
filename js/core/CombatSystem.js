export class CombatSystem {
 attack(attacker,defender){
  if(!attacker||!defender) return null;
  defender.units-=Math.max(1,attacker.units);
  if(defender.units<=0){
   defender.owner=attacker.owner;
   defender.units=1;
  }
  return defender;
 }
}
