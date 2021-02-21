const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform;
var cup1,cup2,cup3,cup4,cup5,cup6,cup7,cup8,cup9,cup10,cup11;
var prize1,prize2,prize3,prize4,prize5,prize6,prize7;
var ball, ballImg;
var slingShot;
var backgroundImg;

function preload() {
  ballImg = loadImage("discoball.png");
  //backgroundImg = loadImage("party.png");
 }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(585,343,290,95);

  cup1 = new Cup(480,275,50,45);
  cup2 = new Cup(550,275,50,45);
  prize1 = new Prize(515,265,80,80);
  cup3 = new Cup(620,275,50,45);
  prize2 = new Prize(585,265,80,80);
  cup4 = new Cup(695,275,50,45);
  prize3 = new Prize(655,265,80,80);
  
  //thirdlevel
  cup5 = new Cup(515,235,50,45);
  cup6 = new Cup(585,235,50,45);
  prize4 = new Prize(550,218,80,80);
  cup7 = new Cup(655,235,50,45);
  prize5 = new Prize(620,218,80,80);
  
  //secondlevel
  cup8 = new Cup(550,195,50,45);
  prize6 = new Prize(585,185,80,80);
  cup9 = new Cup(620,195,50,45);
  //top
  cup10 = new Cup(585,155,50,45);
  prize7 = new Prize(585,112,80,80);
  
  ball = Bodies.circle(50,200,20);
  World.add(world, ball);

  slingShot = new SlingShot(this.ball, {x:100, y:200});
}

function draw() {
  background("black");  
  
  textSize(25)
  fill("white")
  text("Knock down the cups, collect surprise gift boxes!", 50, 50);
  
  platform.display();
  ground.display();

  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  cup6.display();
  cup7.display();
  cup8.display();
  cup9.display();
  cup10.display();

  
  prize1.display();
  prize2.display();
  prize3.display();
  prize4.display();
  prize5.display();
  prize6.display();
  prize7.display();

  imageMode(CENTER);
  image(ballImg, ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingShot.fly();
}
