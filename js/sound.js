export class SoundManager {
 constructor(){
  this.enabled=true;
 }
 play(type){
  if(!this.enabled)return;
  // Placeholder for future audio assets
  console.log('sound:',type);
 }
 toggle(){this.enabled=!this.enabled;}
}