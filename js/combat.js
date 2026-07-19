export function resolveAttack(attacker,target){
 if(!attacker || !target) return;

 const damage=Math.max(1,Math.floor((attacker.units||0)*0.25));
 target.units=Math.max(0,(target.units||0)-damage);

 if(target.units===0){
  target.owner=attacker.owner;
  target.units=Math.floor((attacker.units||0)/2);
 }

 return damage;
}
