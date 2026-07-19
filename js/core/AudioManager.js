export class AudioManager {
 constructor(){
  this.enabled=true;
  this.volume=1;
 }
 play(sound){
  if(!this.enabled) return;
  console.log('Playing sound:',sound);
 }
 toggle(){
  this.enabled=!this.enabled;
 }
}
