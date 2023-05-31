console.log("welcom to java script");
// Initilizing the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName:"Ram Siya Ram",file path:"songs/1.mp3",coverPath:"covers/1.jpeg"},
    {songName:"Tere Hawaale",file path:"songs/2.mp3",coverPath:"covers/2.jpeg"},
    {songName:"Tere Vaaste",file path:"songs/3.mp3",coverPath:"covers/3.jpeg"},
    {songName:"Tu Hai To Mujhe Phir Aur Kya Chahiye",file path:"songs/4.mp3",coverPath:"covers/4.jpeg"},
    {songName:"Zihaal e Miskin",file path:"songs/5.mp3",coverPath:"covers/5.jpeg"},
]

// audioElement.play();
// Handle Play/Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    // Update seekbars
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log( progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element )=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })


 }
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element )=> {
    element.addEventListener('click',(e)=>){
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-remove-circle');
        audioElement.src='songs/${songIndex+1}.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })   
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})