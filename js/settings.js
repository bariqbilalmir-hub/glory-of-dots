export const settings={
 sound:true,
 graphics:'high',
 controls:'touch'
};

export function updateSetting(key,value){
 if(Object.prototype.hasOwnProperty.call(settings,key)){
  settings[key]=value;
 }
}
