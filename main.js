console.log("welcom to java script");
// Initilizing the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName:"Ram Siya Ram", filePath:"songs/1.mp3",coverPath:"covers/1.jpeg"},
    {songName:"Tere Hawaale", filePath:"songs/2.mp3",coverPath:"covers/2.jpeg"},
    {songName:"Tere Vaaste", filePath:"songs/3.mp3",coverPath:"covers/3.jpeg"},
    {songName:"Tu Hai To Mujhe Phir Aur Kya Chahiye",filePath:"songs/4.mp3",coverPath:"covers/4.jpeg"},
    {songName:"Zihaal e Miskin", filePath:"songs/5.mp3",coverPath:"covers/5.jpeg"},
]

// audioElement.play();
// Handle Play/Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-play');
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
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element )=>{
        element.classList.remove('fa-solid fa-pause');
        element.classList.add('fa-solid fa-play');
    })


 }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element )=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-solid fa-play');
        e.target.classList.add('fa-solid fa-remove');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
    })   
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid fa-play');
    masterPlay.classList.add('fa-solid fa-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid fa-play');
    masterPlay.classList.add('fa-solid fa-pause');

})