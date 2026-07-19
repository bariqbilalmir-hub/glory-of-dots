export function setupTouchControls(canvas,camera,onTap){
 let start=null;
 let lastDistance=null;

 canvas.addEventListener('touchstart',e=>{
  if(e.touches.length===1){
   start={x:e.touches[0].clientX,y:e.touches[0].clientY};
  }
 });

 canvas.addEventListener('touchmove',e=>{
  if(e.touches.length===1 && start){
   const t=e.touches[0];
   camera.move(start.x-t.clientX,start.y-t.clientY);
   start={x:t.clientX,y:t.clientY};
  }

  if(e.touches.length===2){
   const a=e.touches[0];
   const b=e.touches[1];
   const distance=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);

   if(lastDistance){
    camera.setZoom(camera.zoom+(distance-lastDistance)*0.005);
   }
   lastDistance=distance;
  }
 });

 canvas.addEventListener('touchend',e=>{
  if(start && e.changedTouches.length){
   const t=e.changedTouches[0];
   if(Math.hypot(t.clientX-start.x,t.clientY-start.y)<10 && onTap){
    onTap(t.clientX,t.clientY);
   }
  }
  start=null;
  lastDistance=null;
 });
}
