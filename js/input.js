export class Input {
 constructor(canvas){
  this.mouse={x:0,y:0};
  this.selectedNode=null;
  const update=(x,y)=>{
   const r=canvas.getBoundingClientRect();
   this.mouse.x=x-r.left;
   this.mouse.y=y-r.top;
  };
  canvas.addEventListener('mousemove',e=>update(e.clientX,e.clientY));
  canvas.addEventListener('click',()=>{
   if(typeof nodes!=='undefined'){
    this.selectedNode=findNodeAtPosition(this.mouse.x,this.mouse.y);
    if(this.selectedNode) showNodeInfo(this.selectedNode);
   }
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
 if(info) info.innerHTML=`<h3>${node.name||'Node'}</h3><p>Owner: ${node.owner||'Unknown'}</p><p>Troops: ${node.troops||0}</p>`;
}
