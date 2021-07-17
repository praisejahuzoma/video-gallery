let VideoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo(){
    VideoPlayer.style.display = "none";
}

function playVideo(file){
    myVideo.src =file;
    VideoPlayer.style.display ="block";
}

// copy right

const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;

// end of copy right
