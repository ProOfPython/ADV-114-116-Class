eye1_X = 0
eye1_Y = 0
eye2_X = 0
eye2_Y = 0
EYE_SIZE = 20

noseX = 0
noseY = 0
function preload(){

}
function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', getPoses)
}
function modelLoaded(){
    console.log('PoseNet is made.')
}
function draw(){
    image(video, 0, 0, 300, 300)
    
    fill(255, 255, 255)
    stroke(255, 255, 255)
    circle(eye1_X, eye1_Y, EYE_SIZE)
    circle(eye2_X, eye2_Y, EYE_SIZE)
    fill(0, 0, 0)
    stroke(0, 0, 0)
    circle(eye1_X, eye1_Y, EYE_SIZE / 2)
    circle(eye2_X, eye2_Y, EYE_SIZE / 2)

    fill(128, 0, 192)
    stroke(128, 0, 192)
    for (var i = 0; i < 3; i++){
        circle(noseX, noseY - ((10 * i) + 5), 10)
    }
}
function snapLens(){
    save('Slow_And_Steady.png')
}
function getPoses(results){
    if (results.length > 0) {
        console.log(results)
        eye1_X = results[0].pose.leftEye.x
        eye1_Y = results[0].pose.leftEye.y
        eye2_X = results[0].pose.rightEye.x
        eye2_Y = results[0].pose.rightEye.y
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}