function setup() {
  createCanvas(600, 400);
  background('#0033FF');
}

function draw(){
  let t = millis() / 1000;
  let f = frameCount;
  let bg1 = color(0, 50, 255);
  let bg2 = color(100, 0, 200);
  let mix = (sin(t * 0.5) + 1) / 2;s
  let bgColor = lerpColor(bg1, bg2, mix);
  background(bgColor);

  noStroke();
  fill(255, 255, 255, 200);

  for (let i = 0; i < 40; i++) {
    let sx = (i * 73 + f * 0.7) % 600;
    let sy = (i * 41) % 200;
    ellipse(sx, sy, 3, 3);
  }

  fill('#000066'); 
  rect(0, 300, 600, 100); 
  
  fill('#0000CC');     
  strokeWeight(0)
  rect(0, 280, 600, 50); 
  

  fill('#FFFF99');
  stroke('#FFFF00');
  strokeWeight(8);
  ellipse(520, 80, 100, 100);

  fill('#FFFF00');
  stroke('#CCFFFF');
  strokeWeight(4);
  ellipse(100, 80, 50, 50);
  ellipse(200, 50, 35, 35);
  
  fill('#FFFF99');
  stroke('#FFFF00');
  strokeWeight(5);
  ellipse(300, 120, 30, 30);
  ellipse(400, 40, 20, 20);
  
  fill('#FFFF99');
  stroke('#FFFFFF');
  strokeWeight(5);
  ellipse(480, 150, 35, 35);
  ellipse(150, 180, 22, 22);
  ellipse(250, 200, 48, 48);

  strokeWeight(3);
  noFill();
  
  stroke('#99CCFF');
  line(100, 120, 160, 110);
  line(120, 130, 180, 120);
  line(140, 140, 200, 130);
  
  stroke('#FFFFFF');
  line(160, 130, 220, 120);
  line(180, 140, 240, 130);
  line(200, 150, 260, 140);
  
  stroke(120, 170, 220);
  line(220, 140, 280, 130);
  line(240, 150, 300, 140);
  line(260, 160, 320, 150);

  stroke(90, 140, 200);
  line(280, 150, 340, 140);
  line(300, 160, 360, 150);
  line(320, 170, 380, 160);

  fill(30, 20, 40);
  stroke(10, 10, 30); 
  strokeWeight(0); 
  beginShape(); 
  vertex(25, 400);   
  vertex(50, 50);   
  vertex(120, 400);  
  endShape(CLOSE);
    
  fill(30, 20, 40);
  stroke(10, 10, 30); 
  strokeWeight(0); 
  beginShape(); 
  vertex(70, 400);       
  vertex(100, 200);       
  vertex(160, 400);       
  endShape(CLOSE);
  
  fill(30, 20, 40);
  stroke(10, 10, 30); 
  strokeWeight(0); 
  beginShape(); 
  vertex(100, 400);       
  vertex(150, 200);       
  vertex(160, 400);       
  endShape(CLOSE);

  let pulse = 10 * sin(t * 3);
  fill(255, 255 * mix, 200, 180);
  noStroke();
  ellipse(520, 80, 120 + pulse, 120 + pulse);

  let ax1 = 100 + sin(t * 1.5) * 15;
  fill(255 * mix, 255, 150);
  ellipse(ax1, 80, 60, 60);

  let ax2 = 200 + sin(t * 1.8) * 10;
  fill(255, 220 * mix, 180);
  ellipse(ax2, 50, 45, 45);

  let ay3 = 120 + cos(t * 1.2) * 12;
  fill(255, 255 * mix, 200);
  ellipse(300, ay3, 40, 40);

  let ax4 = 400 + sin(t * 2.5) * 12;
  fill(255 * mix, 240, 200);
  ellipse(ax4, 40, 30, 30);

  let ay1 = 150 + sin(t * 2) * 10;
  fill(255, 200 * mix, 255);
  ellipse(480, ay1, 45, 45);

  let cy6 = 180 + cos(t * 2.2) * 10;
  fill(255, 255, 200 * mix);
  ellipse(150, cy6, 30, 30);

  let cy7 = 200 + sin(t * 1.7) * 12;
  fill(255 * mix, 255, 150);
  ellipse(250, cy7, 58, 58);
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mysketch', 10);
  }
}