bambooX = 0;
bambooY = 0;
function preload()
{
 muzzle = loadImage("nezukomuzzle.png");
 muzzle.scale = 5;
}
function setup()
{
 var canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video);
poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
if(results.length > 0)
{
bambooX = results[0].pose.nose.x-20;
bambooY = results[0].pose.nose.y+3;
}
}
function draw() {
image(video, 0, 0, 300, 300);
image(muzzle, bambooX, bambooY, 50, 30);
}
function takeSnapshot() {
save('myFilterImage.png');
}