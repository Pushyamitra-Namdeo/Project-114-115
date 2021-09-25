function preload(){

}

function setup(){
canvas= createCanvas(300, 300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,model_loaded);
poseNet.on('pose',got_poses);
}

function draw(){
image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('lipstick_fiter.png');
}

function model_loaded(){
    console.log("model loaded");
}

function got_poses(results){

    if(results.length>0){
      console.log(results);
      console.log("nose x ="+results[0].pose.nose.x);
      console.log("nose y ="+results[0].pose.nose.y);
    }
}