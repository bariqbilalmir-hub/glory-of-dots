export const difficulty={
 level:'normal',
 aiStrength:1,
 decisionDelay:3000
};

export function setDifficulty(level){
 difficulty.level=level;

 if(level==='easy'){
  difficulty.aiStrength=0.7;
  difficulty.decisionDelay=4500;
 }

 if(level==='normal'){
  difficulty.aiStrength=1;
  difficulty.decisionDelay=3000;
 }

 if(level==='hard'){
  difficulty.aiStrength=1.5;
  difficulty.decisionDelay=1500;
 }

 return difficulty;
}
