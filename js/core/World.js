export class World {
 constructor(){
  this.entities=[];
  this.territories=[];
 }
 addEntity(entity){ this.entities.push(entity); }
 setTerritories(territories){ this.territories=territories; }
 update(delta){
  this.entities.filter(e=>e.active).forEach(e=>e.update?.(delta));
 }
}
