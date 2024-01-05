//création du button "start"
var startbutton = document.createElement("button")
var buttonpos = document.getElementById("bouton")
startbutton.innerHTML = "Voir la vidéo"
buttonpos.appendChild(startbutton);
startbutton.className = "boutonstart"

//création du button "stop"
var stopbutton = document.createElement("button")
stopbutton.innerHTML = "Arrêter la vidéo"
stopbutton.className = "boutonstop" 

//création de la vidéo
var video = document.createElement('video');
video.controls = true;
var videopos = document.getElementById("video")
video.src = 'assets/images/vidéo/video.mp4';
video.className = "videocss"

//function du bouton "start"
startbutton.onclick = function () { 
  videopos.appendChild(video);
  video.play();
  buttonpos.replaceChild(stopbutton,startbutton)
  video.classList.add("fadeIn");
}

//function du bouton "stop"
stopbutton.onclick = function () { 
  videopos.removeChild(video);
  video.pause();
  buttonpos.replaceChild(startbutton,stopbutton)
  video.classList.remove("fadeIn");
}