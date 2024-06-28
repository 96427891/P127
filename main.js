song1 = "song_A.mp3";
song2 = "song_B.mp3";

function preload(){
    song_A = loadSound("song_A.mp3");
    song_B = loadSound("song_B.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0,0, 600, 500);
}