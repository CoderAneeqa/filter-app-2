function preload(){
lip_stick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
glasses = loadImage("https://i.postimg.cc/HkBvmrV0/Sunglasses-PNG-Images.png");
}

noseX = 0;
noseY = 0;
lefteyeX = 0;
lefteyeY = 0;

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y+9;
        lefteyeX = results[0].pose.leftEye.x-44;
        lefteyeY = results[0].pose.leftEye.y-15;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}

function draw(){

    image(video,0,0,300,300);
    image(lip_stick, noseX, noseY, 30, 30);
    image(glasses, lefteyeX, lefteyeY, 60, 40)


}

function take_snapshot(){
    save('my_images.png');
}