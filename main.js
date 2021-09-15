img="";
status="";

function preload() {
    img=loadImage('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";

}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
   console.log(error);
    }
    console.log(results);
    objects=results;
} 

function draw() {
    image(img, 0, 0, 640, 420);
   fill("#00FF00");
   text("Dog", 45, 75);
   noFill();
   stroke("#00FF00");
  rect(30, 60, 450, 350);

  fill("#00FF00");
  text("Cat", 320, 120);
  nofill();
  stroke("#00FF00");
  rect(300, 90, 270, 320);
}