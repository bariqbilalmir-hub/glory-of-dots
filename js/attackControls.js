export function setupAttackControls(canvas,game){
 let selected=null;

 canvas.addEventListener('click',e=>{
  const node=game.nodes.find(n=>{
   const dx=n.x-e.clientX;
   const dy=n.y-e.clientY;
   return Math.hypot(dx,dy)<(n.radius||20);
  });

  if(!node) return;

  if(!selected){
   selected=node;
  }else{
   if(selected!==node && game.attack){
    game.attack(selected,node);
   }
   selected=null;
  }
 });
}
