export class ProgressionSystem {
 constructor(){
  this.level=1;
  this.xp=0;
 }

 addXP(amount){
  this.xp+=amount;
  if(this.xp>=this.level*100){
   this.xp=0;
   this.level++;
  }
  return this.level;
 }
}
