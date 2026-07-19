export function saveGame(game){
 const saveData={
  nodes:game.nodes || [],
  state:game.state || 'menu',
  timestamp:Date.now()
 };
 localStorage.setItem('gloryOfDotsSave',JSON.stringify(saveData));
 return saveData;
}

export function loadGame(){
 const saved=localStorage.getItem('gloryOfDotsSave');
 return saved ? JSON.parse(saved) : null;
}

export function clearSave(){
 localStorage.removeItem('gloryOfDotsSave');
}
