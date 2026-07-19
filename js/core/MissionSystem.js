export class MissionSystem {
 constructor(){
  this.missions=[];
 }

 addMission(mission){
  this.missions.push({completed:false,...mission});
 }

 complete(id){
  const mission=this.missions.find(m=>m.id===id);
  if(mission) mission.completed=true;
 }

 getActive(){
  return this.missions.filter(m=>!m.completed);
 }
}
