const song_title = document.querySelector('.song_title');
const song_name = document.querySelector('.song_name');
const thumbnail = document.querySelector('#thumbnail');
const pp = document.querySelector('#pp');
const bg = document.querySelector('#BG');

var playing = False;

function playPause(){
  if (playing){
    const song = document.querySelector("#song");
    song.play();
    playing= false;
  }
  else{
    const song = document.querySelector("#song");
    song.pause();
    playing= true;
  }
}
