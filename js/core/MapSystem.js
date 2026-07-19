export class MapSystem {
 constructor(){
  this.map=[];
 }
 generate(width,height){
  this.map=[];
  let id=0;
  for(let y=0;y<height;y++){
   for(let x=0;x<width;x++){
    this.map.push({id:id++,x,y,owner:'neutral',units:5});
   }
  }
  return this.map;
 }
}
