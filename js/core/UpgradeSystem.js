export class UpgradeSystem {
 constructor(){
  this.levels={attack:1,defense:1,income:1};
 }
 upgrade(type){
  if(this.levels[type]) this.levels[type]++;
  return this.levels;
 }
}
