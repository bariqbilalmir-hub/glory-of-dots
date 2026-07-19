import { Movement } from './movement.js';

export class MovementController {
 constructor(game){
  this.movement = new Movement(game);
  this.game = game;
 }

 handleNodeClick(node){
  if(!this.movement.selectedSource){
   this.movement.selectNode(node);
   return;
  }

  if(this.movement.selectedSource !== node){
   this.movement.moveTo(node);
  } else {
   this.movement.selectedSource = null;
  }
 }
}
