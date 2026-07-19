export class Input {
 constructor(canvas){
  this.mouse={x:0,y:0};
  canvas.addEventListener('mousemove',e=>{
   const r=canvas.getBoundingClientRect();
   this.mouse.x=e.clientX-r.left; this.mouse.y=e.clientY-r.top;
  });
 }
}