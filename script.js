const songs = [

{
title:"Bestfriend",
artist:"Davinder Bhatti",
src:"songs/bestfriend-davinder-bhatti.mp3",
cover:"images/bestfriend1.jpeg"
},

{
title:"Bestfriend",
artist:"The Landers",
src:"songs/bestfriend-the-landers.mp3",
cover:"images/bestfriend2.jpeg"
},

{
title:"Stand By",
artist:"Deep Chahal",
src:"songs/stand-by-deep-chahal.mp3",
cover:"images/standby.jpeg"
}

];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");
const playBtn = document.getElementById("playBtn");

function loadSong(i){

audio.src = songs[i].src;
title.innerHTML = songs[i].title;
artist.innerHTML = songs[i].artist;
cover.src = songs[i].cover;

}

loadSong(index);

function playPause(){

if(audio.paused){

audio.play();
playBtn.innerHTML = "⏸️";

}else{

audio.pause();
playBtn.innerHTML = "▶️";

}

}

function nextSong(){

index++;

if(index >= songs.length){
index = 0;
}

loadSong(index);
audio.play();
playBtn.innerHTML = "⏸️";

}

function prevSong(){

index--;

if(index < 0){
index = songs.length - 1;
}

loadSong(index);
audio.play();
playBtn.innerHTML = "⏸️";

}

audio.addEventListener("timeupdate", function(){

progress.max = audio.duration || 0;
progress.value = audio.currentTime;

document.getElementById("current").innerHTML = format(audio.currentTime);
document.getElementById("duration").innerHTML = format(audio.duration);

});

progress.addEventListener("input", function(){

audio.currentTime = progress.value;

});

volume.addEventListener("input", function(){

audio.volume = volume.value;

});

function format(time){

if(isNaN(time))
return "0:00";

let min = Math.floor(time / 60);
let sec = Math.floor(time % 60);

if(sec < 10){
sec = "0" + sec;
}

return min + ":" + sec;

}

audio.onended = function(){

nextSong();

};

songs.forEach(function(song, i){

let li = document.createElement("li");

li.innerHTML = song.title + " - " + song.artist;

li.onclick = function(){

index = i;
loadSong(index);
audio.play();
playBtn.innerHTML = "⏸️";

};

playlist.appendChild(li);

});