import { resolveAttack } from './combat.js';

export function performAttack(game,from,to){
 const damage=resolveAttack(from,to);
 if(game.battleManager){
  game.battleManager.attack(from,to);
 }
 return damage;
}
