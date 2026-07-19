import { BattleAnimation } from './battleAnimation.js';

export class BattleManager {
 constructor(){
  this.animations=[];
 }

 attack(attacker,target){
  this.animations.push(new BattleAnimation(attacker,target));
 }

 update(){
  this.animations=this.animations.filter(animation=>!animation.update());
 }
}
