export function setupMobile(canvas){
 function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
 }
 window.addEventListener('resize',resize);
 resize();

 let lastTouch=null;
 canvas.addEventListener('touchstart',e=>{
  lastTouch=e.touches[0];
 });

 canvas.addEventListener('touchend',e=>{
  lastTouch=null;
 });
}
