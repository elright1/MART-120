

function setup() {
  createCanvas(400, 400);
 
   
}

function draw() {
  background(133, 189, 191);
  
  //Clouds
     fill(255)
  stroke(255)
  ellipse(35, 50, 160, 130);
  ellipse(1, 150, 130, 90); 
  ellipse(135, 5, 160, 130); 
  ellipse(235, 2, 160, 130); 
  ellipse( 345, 50, 160, 130); 
   ellipse(120, 270, 130, 90); 
   ellipse(13, 290, 130, 90);
   ellipse(413, 290, 130, 90);
  
  //Cat head 
    stroke(42, 56, 60);
    fill(87, 115, 122);
  circle(200, 200, 150);
  
  //cat Ears 
    stroke(42, 56, 60);
  triangle(128, 90, 128, 185, 186, 127);
  triangle(272, 90, 272, 185, 214, 127);

  //inner ear
    stroke(125, 154, 161);
  fill(125, 154, 161)
  triangle (137, 120, 128, 189, 170, 145);
  triangle(265, 120, 275, 186, 224, 138);

  //mouth
    stroke(42, 56, 60);
ellipse(200, 230, 80, 50); 
  
  //nose
    stroke(42, 56, 60);
  fill(42, 56, 60)
  ellipse(200, 210, 20, 10); 

  //eyes
    stroke(42, 56, 60);
  fill(42, 56, 60)
  ellipse(170, 180, 20, 30); 
  ellipse(224, 180, 20, 30); 

  
  //inner eyes
    stroke(42, 56, 60);
  fill(25, 33, 36)
  ellipse(170, 180, 10, 20); 
  ellipse(224, 180, 10, 20); 
  
  
  
   //inner eyes highlights
    stroke(42, 56, 60);
  fill(255)
  ellipse(175, 180, 10, 5); 
  ellipse(229, 180, 10, 5); 
  
  
    // Whiskers (left side)
  stroke(42, 56, 60);
  strokeWeight(2);
  line(180, 220, 120, 210);
  line(180, 230, 120, 230);
  line(180, 240, 120, 250);

  // Whiskers (right side)
  line(220, 220, 280, 210);
  line(220, 230, 280, 230);
  line(220, 240, 280, 250);
  
  
  
  // Rain drops
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(2, 8); // Vary raindrop sizes
    noStroke();
    fill(161,198,204);
    ellipse(x, y, size, size * 2);

    // Occasional raindrops with cat ear shapes
    if (random() < 0.05) {
      push();
      translate(x, y);
      rotate(random(-PI / 6, PI / 6)); // Slight rotation
      triangle(0, -size * 2, -size / 2, 0, size / 2, 0); 
      pop();
    }
  }
  
}