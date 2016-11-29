var myImage;

var state = false;

function preload(){
    myImage = loadImage("images/flamingo.jpg");
}

function setup() {
  	createCanvas(windowWidth, windowHeight);
//    myImage.filter("invert");
    
//    imageMode(CENTER);
//    image(myImage,width/2,height/2,800,600);
    backgroundImage(myImage);
}

function draw() {
    
    if ( state == true) {
        for (var i = 0; i<= 50; i++){
            var posX = random(0,width);
            var posY = random(0,height);

            var myColor = get(posX,posY); 
            fill(myColor)
            noStroke();
            ellipse(posX,posY,5,5);    
        }    
    }
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
//    image(myImage,width/2,height/2,800,600);
    backgroundImage(myImage)
}

function mousePressed() {
    if (state == true) {
        state = false;
    } else {
        state = true;
    }
}

function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;


    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;


    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;


    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);


    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;


    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;


    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}
