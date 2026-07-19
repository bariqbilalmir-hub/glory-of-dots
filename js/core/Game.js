import {GameEngine} from './GameEngine.js';
import {Renderer} from './Renderer.js';

export class Game {
 constructor(canvas){
  this.engine=new GameEngine();
  this.renderer=new Renderer(canvas);
 }

 tick(time){
  this.engine.update(time);
  this.renderer.render(this.engine.nodes);
 }
}
