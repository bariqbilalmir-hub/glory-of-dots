export class Input {
 constructor(canvas,movement){
  this.mouse={x:0,y:0};
  this.movement=movement;

  canvas.addEventListener('click',()=>{
   if(typeof nodes==='undefined') return;
   const node=findNodeAtPosition(this.mouse.x,this.mouse.y);
   if(!node) return;

   if(this.movement.selectedSource){
    this.movement.moveTo(node);
   } else {
    this.movement.selectNode(node);
   }

   showNodeInfo(node);
  });

  canvas.addEventListener('mousemove',e=>{
   const r=canvas.getBoundingClientRect();
   this.mouse.x=e.clientX-r.left;
   this.mouse.y=e.clientY-r.top;
  });
 }
}

function findNodeAtPosition(x,y){
 for(const node of nodes){
  if(Math.hypot(x-node.x,y-node.y)<(node.radius||20)) return node;
 }
 return null;
}

function showNodeInfo(node){
 const info=document.getElementById('node-info');
 if(info) info.innerHTML=`<h3>${node.name||'Dot'}</h3><p>Owner: ${node.owner}</p><p>Units: ${node.units||0}</p>`;
}
