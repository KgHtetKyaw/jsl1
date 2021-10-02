// UI
const menubarbtn = document.getElementById('menu-bar');
const ncontainer = document.getElementById('ncontainer');
const loginbtn = document.getElementById('login-btn');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');
const cancelbtn = document.getElementById('cancelbtn');

// Open Menu Bar
menubarbtn.addEventListener('click',()=>{
    // console.log('hay');
    ncontainer.classList.toggle('shownav');
    menubarbtn.classList.toggle('shownav');
});

// Show Modal
loginbtn.addEventListener('click',()=>{
    // console.log('hay');
    modal.classList.toggle('showmodal');
});

// Close Modal
closebtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});

// Cancel Modal
cancelbtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});


// Audio
const mcontainer = document.getElementById('m-container');

const title = document.getElementById('title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev');
const playbtn = document.getElementById('play');
const nextbtn = document.getElementById('next');

const progressloadingbox = document.getElementById('progress-loading-box');

let songindex =0;

// Song Title
const songs = ['Justin Bieber Intentions','JBieber  Peaches ft Daniel Caesar Giveon','The Kid LAROI Justin Bieber  Stay'];
// console.log(songs);

loadsong(songs[songindex]);
function loadsong(music){
    // console.log(music);
    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${songs[songindex]}.jpg`;
}

// Play Song
playbtn.addEventListener('click',()=>{
    // console.log('hay');
    // mcontainer.classList.add('play');
    const isplaying = mcontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

// Play Song
function playsong(){
    mcontainer.classList.add('play');
    progressloadingbox.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause SOng
function pausesong(){
    mcontainer.classList.remove('play');
    progressloadingbox.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Change Song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

// Prev Song
function previoussong(){
    songindex--;

    if(songindex < 0){
        songindex = songs.length -1;
    }

    loadsong(songs[songindex]);
    playsong();
}

// Next Song
function nextsong(){
    songindex++;

    if(songindex > songs.length - 1){
        songindex = 0;
    }

    loadsong(songs[songindex]);
    playsong();
}
