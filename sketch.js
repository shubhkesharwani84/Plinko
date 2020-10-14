const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint=Matter.Constraint;


var engine,world,chain,block;
var ground, ground2;

var particles = [];
var plinko = [];
var division =[];


var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine=Engine.create ()
  world = engine.world;
  
    ground = new Ground(240,800,width, 20)

    
  // D1 = new Division(645, 450, 10, 700);
  // D2 = new Division(5, 450, 10, 700);
  // D3 = new Division(325, 695, 650, 10);
  // D4 = new Division(325, 5, 650, 10);

  for(var k = 0; k <= width; k = k+95){
    division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinko.push(new Plinko(j, 175))
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinko.push(new Plinko(j, 275))
  }
}


function draw() {
  Engine.update(engine);
  background(0);  

  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for(var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  ground.display();

}
