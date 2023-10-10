
console.log("Welcome to Vimal Musice App");

// Initialize the variables



let songIndex = 0;
let audioElement =new Audio('11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
// let we=document.getElementById("we");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName('songItem'));
// // let = Array.from(document.getElementsByClassName('timestamp'));
let pic="<img src='22.gif' </img>";
 
let songs = [
    {songsName: "Pyara Saja Hai Tera Darbar",filePath:"1.mp3",coverPath:"cover1.jpeg"},
    {songsName: "Shiv Tandav Stotram",filePath:"2.mp3",coverPath:"cover2.jpeg"},
    {songsName: "Achutam Kesavm Krishn Damodaram",filePath:"3.mp3",coverPath:"cover3.jpeg"},
    {songsName: "Dar Pe Ane Ke Kabil Nahi Hu",filePath:"4.mp3",coverPath:"cover4.jpeg"},
    {songsName: "Jisne Bhi Tere Kadmo Pe Sar Jhukaya Hai",filePath:"5.mp3",coverPath:"cover5.jpeg"},
    {songsName: "Bam Lahri DJ Song",filePath:"6.mp3",coverPath:"cover6.jpeg"},
    {songsName: "Chalo Bulawa Aaya Hai Mata..",filePath:"7.mp3",coverPath:"cover7.jpeg"},
    {songsName: "Mai Pardesi",filePath:"8.mp3",coverPath:"cover8.jpeg"},
    {songsName: "Man Mera Mandir Shiv Meri Pooja",filePath:"9.mp3",coverPath:"cover9.jpg"},
    {songsName: "Om Namah Shivay Om",filePath:"10.mp3",coverPath:"cover10.jpeg"}
]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songsName;
});

// audioElement.play();
// Handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
       
    }

})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value= progress;
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemsplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
       element.classList.add('fa-play-circle');
       gif.style.opacity=0;
        })

}

Array.from(document.getElementsByClassName('songItemsplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText=songs[songIndex].songsName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        e.target.classList.add("src='22.gif");
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

    });

    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=songs.length-1){
            songIndex = 0;
        }else{
            songIndex +=1;
        }
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songsName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        document.getElementById(`we${index}`).style.opacity=0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<1){
            songIndex = songs.length-1;
        }else{
            songIndex -=1;
        }
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songsName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })

