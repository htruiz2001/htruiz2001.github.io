const audio = document.getElementById("audio");
const playpause = document.getElementById("play");

playpause.addEventListener("click", () =>{
if (audio.paused || audio.ended) {
    playpause.querySelector(".pause-btn").classList.toggle("hide");
    playpause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
}else{
    audio.pause()
    playpause.querySelector(".pause-btn").classList.toggle("hide");
    playpause.querySelector(".play-btn").classList.toggle("hide");
}
});