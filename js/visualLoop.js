import { renderNodes } from './render.js';

export function startVisualLoop(canvas, game){
 const ctx=canvas.getContext('2d');

 function draw(){
  renderNodes(ctx, game.nodes || []);
  requestAnimationFrame(draw);
 }

 draw();
}
