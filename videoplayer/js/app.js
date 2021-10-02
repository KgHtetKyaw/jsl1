// UI
const video = document.getElementById('video');

const play = document.getElementById('play'),
    pause = document.getElementById('stop'),
    progress = document.getElementById('progress'),
    timestamp = document.getElementById('timestamp');

// Play and Pause Video
function togglevideostatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// Update Play and Pause Icon
function updateplayicon(){
    if(video.paused){
        play.innerHTML=`<i class="fas fa-play fa-2x"></i>`;
    }else{
        play.innerHTML=`<i class="fas fa-pause fa-2x"></i>`
    }
}

// Update Progress & Timestamp
function updateprogress(){
    console.log(video.currentTime);
    console.log(video.duration);
    progress.value=(video.currentTime / video.duration) * 100;

    // get minutes

    let mins = Math.floor(video.currentTime / 60);

    if(mins < 10){
        // mins = "o"+mins;
        mins = 0+String(mins);
    }
    console.log(mins);

    // get seconds

    let secs = Math.floor(video.currentTime % 60);

    if(secs <10){
        secs = "0"+secs;
    }
    console.log(secs);

    timestamp.textContent = `${mins}:${secs}`;
}

// Stop Video
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}

// Set Video Time to progress
function setvideoprogress(){
    video.currentTime = (progress.value * video.duration) / 100;
}



// Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
pause.addEventListener('click',stopvideo);

progress.addEventListener('click',setvideoprogress);

// 10VDO WDF4076