export class EffectSystem {
 constructor(){
  this.effects=[];
 }
 add(effect){
  this.effects.push(effect);
 }
 update(delta){
  this.effects=this.effects.filter(effect=>{
   effect.life-=delta;
   return effect.life>0;
  });
 }
}
