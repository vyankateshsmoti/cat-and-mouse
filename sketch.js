var cat;
var cat_Img,runningCat_Img,stopCat_Img;

var mouse;
var mouse_Img,mouse_Img1,mouse_Img3;

var bk,bk_Img;

function preload() {
    //load the images here
    cat_Img = loadImage("images/cat1.png");
    runningCat_Img = loadAnimation("images/cat2.png","images/cat3.png");
    //runningCat_Img1 = loadImage("images/cat3.png");
    stopCat_Img = loadImage("images/cat4.png");
    mouse_Img = loadImage("images/mouse1.png");
    mouse_Img1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    //mouse_Img2 = loadImage("images/mouse3.png");
    mouse_Img2 = loadImage("images/mouse4.png");
    bk_Img = loadImage("images/garden.png");
}

function setup(){
    createCanvas(600,600);
    bk = createSprite(300,300,500,500);
     bk.addImage("images/garden.png",bk_Img);

    cat = createSprite(500,500,20,20);
    cat.addImage("images/cat1.png",cat_Img);
    cat.scale = 0.1;
    console.log(cat.y);

    mouse = createSprite(80,500,20,20);
    mouse.addImage("images/mouse1.png",mouse_Img);
    mouse.scale = 0.1;

}

function draw() {

    background(0);
    keyPressed();

    if(isTouching(mouse,cat)){
        cat.addAnimation("images/cat4.png",stopCat_Img);
        cat.changeAnimation("images/cat4.png");
        cat.x = 160;
        cat.velocityX=0;

         mouse.addAnimation("images/mouse4.png",mouse_Img2);
        mouse.changeAnimation("images/mouse4.png")
         }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    text(cat.x + ',' + mouseY,10,45);
}


function keyPressed(){

if(keyDown(LEFT_ARROW) ){
    cat.velocityX = -5;
    cat.addAnimation("running",runningCat_Img);
    cat.changeAnimation("running");

    mouse.addAnimation("Teasing",mouse_Img1);
    mouse.changeAnimation("Teasing");
}
}

function isTouching(object1,object2){
    if(object1.x > object2.x){
        
      return true;
       
    }
    else{
        return false;
    }

}