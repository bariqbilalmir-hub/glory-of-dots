export class Animation {
 constructor(){
  this.time=0;
 }
 update(){
  this.time++;
 }
 pulse(){
  return 1 + Math.sin(this.time*0.08)*0.1;
 }
}