export class Menu {
 constructor(game){
  this.game=game;
  this.visible=true;
  this.difficulty='Normal';
 }
 draw(ctx){
  if(!this.visible)return;
  ctx.fillStyle='#fff';
  ctx.font='32px Arial';
  ctx.textAlign='center';
  ctx.fillText('Glory of Dots', innerWidth/2, 100);
  ctx.font='20px Arial';
  ctx.fillText('Click to start - Difficulty: '+this.difficulty, innerWidth/2, 150);
 }
 start(){this.visible=false;}
}