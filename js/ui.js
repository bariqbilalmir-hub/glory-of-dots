export class UI {
 constructor(){
  this.status='';
 }
 update(game){
  const player=game.nodes.filter(n=>n.owner==='player').length;
  const bot=game.nodes.filter(n=>n.owner==='bot').length;
  if(player===0) this.status='Defeat';
  else if(bot===0) this.status='Victory';
  else this.status='';
 }
 draw(ctx){
  ctx.fillStyle='#fff';
  ctx.font='24px Arial';
  ctx.textAlign='left';
  ctx.fillText(this.status,20,40);
 }
}