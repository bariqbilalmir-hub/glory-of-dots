import { Renderer } from './renderer.js';

export class Game {
 constructor(canvas){ this.canvas=canvas; this.renderer=new Renderer(canvas); this.running=false; }
 start(){ this.running=true; this.loop(); }
 loop(){ if(!this.running) return; this.renderer.render(); requestAnimationFrame(()=>this.loop()); }
}