var bullet,wall
var speed,weight,thickness
var deformation
var damage
function preload(){
  
}
function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet = createSprite(50,200,50,50)
  wall = createSprite(1200,200,thickness,200)
  bullet.velocityX = speed;
  thickness = random(22,8)
}

function draw() {
  background(255,255,255);  
  
 
    if(hasColided(bullet, wall))
    {
bullet.velocityX=0
 damage=(0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  console.log(damage) 
if(damage>10)

    {
      wall.shapeColor= "red"
    }
    if(damage<10)
    {
      wall.shapeColor= "green"
    }
    
  }
  drawSprites();
  
}
function hasColided(Bullet,Wall)
{
bulletRightEdge=Bullet.x +Bullet.width;
wallLeftEdge=Wall.x
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
else {return false;}
}