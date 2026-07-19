import { DotNode } from './node.js';

export function createMap(){
 return [
  new DotNode(250,250,'player'),
  new DotNode(500,250,'neutral'),
  new DotNode(750,250,'bot')
 ];
}