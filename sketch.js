const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300

function setup() {
  createCanvas(800,800)
engine = Engine.create()
world = engine.world  
ground = new Ground(400,780,480,20)



for(var k = 0 ; k <=width ; k = k+80 ){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }


  
  for(var j = 40 ; j <= width ; j = j + 50){
  plinkos.push(new Plinko(j,75))
  }


  
  for(var j = 70 ; j <= width-10 ; j = j + 50){
    plinkos.push(new Plinko(j,125))
    }



  
    for(var j = 40 ; j <= width ; j = j + 50){
      plinkos.push(new Plinko(j,175))
      }


  
      for(var j = 70 ; j <= width-10 ; j = j + 50){
        plinkos.push(new Plinko(j,225))
        }

        for(var j = 40 ; j <= width ; j = j + 50){
          plinkos.push(new Plinko(j,275))
          }

      
          for(var j = 70 ; j <= width-10 ; j = j + 50){
            plinkos.push(new Plinko(j,325))
            }

}

function draw() {
  background("black")
 Engine.update(engine)
 
  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-300,width/2+300),10,10))
  }



  for(var j = 0 ; j < particles.length ; j++){
    particles[j].display()
}




for (var k = 0 ; k < divisions.length ; k++ )  {
     divisions[k].display()
}



for (var k = 0 ; k < plinkos.length ; k++){
     plinkos[k].display()
}

}

