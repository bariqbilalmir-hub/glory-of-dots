export class Effects {
 constructor(){this.particles=[];}
 burst(x,y,owner){
  for(let i=0;i<12;i++){
   this.particles.push({x,y,vx:(Math.random()-0.5)*4,vy:(Math.random()-0.5)*4,life:30,owner});
  }
 }
 update(){
  this.particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.life--;});
  this.particles=this.particles.filter(p=>p.life>0);
 }
 draw(ctx){
  for(const p of this.particles){
   ctx.beginPath();
   ctx.arc(p.x,p.y,3,0,Math.PI*2);
   ctx.fillStyle=p.owner==='player'?'#3498db':'#e74c3c';
   ctx.fill();
  }
 }
}