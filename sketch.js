var movingRec
var fixedRec
var Ob1
var Ob2

function setup() {
  createCanvas(1200,400);

 fixedRec= createSprite(100, 200, 50, 50); 
 movingRec= createSprite(500, 200, 50, 50);
Ob1= createSprite(700, 200, 50, 50); 
Ob2= createSprite(1000, 200, 50, 50); 
 fixedRec.shapeColor=("green")
 movingRec.shapeColor=("green")
fixedRec.debug=true
movingRec.debug=true
Ob1.shapeColor=("green")
Ob2.shapeColor=("green")
Ob1.debug=true
Ob2.debug=true
Ob1.velocityX=3
Ob2.velocityX=-3

}

function draw() {
  background("black");
  movingRec.x=World.mouseX  
  movingRec.y=World.mouseY
  if(collision(movingRec,Ob1)){
  Ob1.shapeColor=("red")
    movingRec.shapeColor=("red")
  
   }
   else
   {
    Ob1.shapeColor=("green")
    movingRec.shapeColor=("green")
   }

bounceOff(Ob1,Ob2)
  drawSprites();
}
function bounceOff(K1,K2)
{
  if(K1.x-K2.x<=K1.width/2+K2.width/2 && K2.x-K1.x<=K1.width/2+K2.width/2)
   
   {
   K1.velocityX=K1.velocityX*(-1)
   K2.velocityX=K2.velocityX*(-1)
   }
   

}