export class Input {
 constructor(canvas){
  this.mouse={x:0,y:0};
  const update=(x,y)=>{
   const r=canvas.getBoundingClientRect();
   this.mouse.x=x-r.left;
   this.mouse.y=y-r.top;
  };
  canvas.addEventListener('mousemove',e=>update(e.clientX,e.clientY));
  canvas.addEventListener('touchmove',e=>{
   const t=e.touches[0];
   update(t.clientX,t.clientY);
  },{passive:true});
 }
}