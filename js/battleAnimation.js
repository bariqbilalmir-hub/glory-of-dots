export class BattleAnimation {
 constructor(attacker, target){
  this.attacker=attacker;
  this.target=target;
  this.progress=0;
  this.finished=false;
 }

 update(){
  this.progress+=0.05;
  if(this.progress>=1){
   this.finished=true;
  }
  return this.finished;
 }
}
