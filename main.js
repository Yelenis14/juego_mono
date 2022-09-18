const player = document.getElementById("player");
const fuego = document.getElementById("fuego");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");

let scoreInterval;
let score = 0;




board.addEventListener("click", function (){
    playerJump
})

function playerJump(){
    player.classList.add("playerJump");
}

/*document.addEventListener("click", function(){
    player.classList.add("playerJump");
});*/

player.addEventListener("animationend", () =>{
    player.classList.remove("playerJump");
});



function pauseGame() {
    fuego.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    clearInterval(scoreInterval);
   
  

}


function resumeGame(){
    fuego.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';
    clearInterval(scoreInterval);
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById("score").innerText = score;
    },1000)
   
}



buttonPlayStop.addEventListener('click', () => {
  

    if (buttonPlayStop.classList.contains("play")){
        //reanudo el juego
        resumeGame();
    }
    else {
        pauseGame();
    }
   
    buttonPlayStop.classList.toggle("play");
    //si es un boton de play, continúa el juego
    //si es un boton de pausa, pausa el juego
})

scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
},1000)

document.addEventListener("keyup", (event) =>  {
    if (event.key == 'ArrowUp') {
        playerJump();
    }

    if (event.key.toLowerCase() == 'w') {
        playerJump();
    }
})

