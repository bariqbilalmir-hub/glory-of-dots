export function initMainMenu(game){
 const play=document.getElementById('play-button');
 const settings=document.getElementById('settings-button');

 if(play){
  play.onclick=()=>{ game.state='playing'; };
 }

 if(settings){
  settings.onclick=()=>{ game.state='settings'; };
 }
}
