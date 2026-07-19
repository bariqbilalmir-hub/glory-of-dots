export const uiState={
 screen:'menu',
 paused:false,
 message:''
};

export function changeScreen(screen){
 uiState.screen=screen;
}

export function setMessage(message){
 uiState.message=message;
}
