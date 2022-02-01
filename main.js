function preload(){

}

function setup(){
  video = createCapture(VIDEO);
  video.size(550,500);
  canvas = createCanvas(550,450);
  canvas.position(600, 100);
  poseNet= ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResults);
}

function modelLoaded(){
    console.log("PoseNet model has been allowed to pass by my good sister.");
}

function gotResults(results){
    if(results.length>0){
        console.log(results);
        
    }
}

function draw(){
background("#00FFBF");

}