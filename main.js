noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;

function draw()
{
background('#969A97');
fill('#F90093');
stroke('#F90093');
square(noseX,noseY,diffrence);
}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Intialized!');
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
diffrence=floor(leftWristX-rightWristX);
}
}
