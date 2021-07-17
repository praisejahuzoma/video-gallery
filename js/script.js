let VideoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo(){
    VideoPlayer.style.display = "none";
}

function playVideo(file){
    myVideo.src =file;
    VideoPlayer.style.display ="block";
}
