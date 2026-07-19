export class Troop {
 constructor(x,y,owner){this.x=x;this.y=y;this.owner=owner;}
 update(){}
 draw(ctx){ctx.fillStyle=this.owner==='player'?'#3498db':'#e74c3c';ctx.beginPath();ctx.arc(this.x,this.y,5,0,Math.PI*2);ctx.fill();}
}