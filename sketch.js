const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,ball,ground,rope; 
var mConstraint;

function setup(){
    canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
      mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(300,355,40,40);
    box2 = new Box(400,355,40,40);
    box3 = new Box(500,355,40,40);
    box4 = new Box(300,305,40,40);
    box5 = new Box(400,305,40,40);
    box6 = new Box(500,305,40,40);
    box7 = new Box(300,255,40,40);
    box8 = new Box(400,255,40,40);
    box9 = new Box(500,255,40,40);
    box10 = new Box(300,205,40,40);
    box11 = new Box(400,205,40,40);
    box12 = new Box(300,155,40,40);
    box13 = new Box(400,155,40,40); 
    box14 = new Box(300,105,40,40);
    
    ball = new Ball(10,10);
    rope = new Rope(ball.body, { x: 250, y: 50 });

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    ball.display();
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
