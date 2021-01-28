var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1=createSprite(0,600,60,20);
    surface1.shapeColor="blue";
    surface1.velocityX=0;
    surface1.velocityY=0;

    surface2=createSprite(200,600,60,20);
    surface2.shapeColor="yellow";
    surface2.velocityX=0;
    surface2.velocityY=0;

    surface3=createSprite(400,600,60,20);
    surface3.shapeColor="red";
    surface3.velocityX=0;
    surface3.velocityY=0;

    surface4=createSprite(600,600,60,20);
    surface4.shapeColor="green";
    surface4.velocityX=0;
    surface4.velocityY=0;

    box=createSprite(random(20,750),0,40,40);
    box=velocityY=3;
    box.velocityX=0;
    box.shapeColor="white";
    }

function draw() {
    background(white);
    CreateEdgeSprites()

    if(surface1.isTouching(box)&&box.bounceOff(surface1))
    {
        box.velocityY=0;
        box.shapeColor="blue";
        music.play();
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2))
    {
        box.velocityY=0;
        box.shapeColor="yellow";
        music.play();
    }
    

if(surface3.isTouching(box)&&box.bounceOff(surface3))
    {
        box.velocityY=0;
        box.shapeColor="red";
        music.play();
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4))
    {
        box.velocityY=0;
        box.shapeColor="green";
        music.play();
    }
    

DrawSprites()
    
}

    

