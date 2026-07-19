export class Player {
 constructor(id,type='human'){
  this.id=id;
  this.type=type;
  this.territories=[];
 }
 addTerritory(territory){ this.territories.push(territory); }
}
