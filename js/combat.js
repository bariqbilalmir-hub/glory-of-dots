export function resolveBattle(attacker, defender, amount){
 defender.units -= amount;

 if(defender.units <= 0){
  defender.owner = attacker.owner;
  defender.units = amount;
  return 'captured';
 }

 return 'defended';
}
