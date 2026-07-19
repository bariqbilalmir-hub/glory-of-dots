export function updateHUD(game){
 const panel=document.getElementById('node-info');
 if(!panel) return;

 const playerNodes=game.nodes.filter(n=>n.owner==='player');
 const troops=playerNodes.reduce((sum,n)=>sum+(n.units||0),0);

 panel.innerHTML=`<div>Army: ${troops}</div><div>Status: ${game.state?.status||'playing'}</div>`;
}
