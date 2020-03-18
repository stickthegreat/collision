var ms,fs;




function setup() {
  createCanvas(800,400);
  ms = createSprite(400, 200, 50, 50);
  fs = createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  
  ms.x=mouseX
  ms.y=mouseY
  
  if (fs.x-ms.x < fs.width/2+ms.width/2 && ms.x-fs.x < ms.width/2+fs.width/2 &&
    fs.y-ms.y < fs.height/2+ms.height/2 && ms.y-fs.y < ms.height/2+fs.height/2 ){

   ms.shapeColor="yellow"
   fs.shapeColor="yellow"
  }

  else{

    ms.shapeColor="grey"
    fs.shapeColor="grey"
  }
  drawSprites();

   

}

