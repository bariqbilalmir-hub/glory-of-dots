export class Campaign {
 constructor(){
  this.level=1;
  this.completed=[];
 }
 complete(level){
  if(!this.completed.includes(level)) this.completed.push(level);
  this.level=level+1;
 }
 isUnlocked(level){
  return level===1 || this.completed.includes(level-1);
 }
 reset(){
  this.level=1;
  this.completed=[];
 }
}