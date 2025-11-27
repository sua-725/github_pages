let paused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#FFD4DF');

  let body = paused ? 0 : sin(frameCount * 0.07) * 3;
  let mouth = paused ? 0 : sin(frameCount * 0.2) * 3;
  let X = paused ? 0 : map(mouseX, 0, width, -5, 5);
  let Y = paused ? 0 : map(mouseY, 0, height, -3, 3);

  // 머리카락
  fill('#3B1F06'); 
  noStroke();
  rect(210, 150, 180, 240);
  ellipse(300, 150, 200, 220);

  // 얼굴
  fill(255, 230, 220); 
  ellipse(300, 180, 160, 180);

  // 앞머리
  fill('#3B1F06');
  rect(220, 90, 50, 60);
  rect(270, 80, 50, 70);
  rect(320, 90, 60, 60);
  fill(255, 230, 220);
  triangle(300, 150, 305, 100, 310, 150);
  
  // 귀
  fill(255, 230, 220);
  ellipse(210, 180, 30, 40);
  ellipse(390, 180, 30, 40);

  // 귀걸이
  stroke(180);
  strokeWeight(3);
  noFill();
  ellipse(210, 200, 20, 20);
  ellipse(390, 200, 20, 20);
  noStroke();

  // 눈
  fill(255);
  ellipse(265, 170, 50, 35);
  ellipse(335, 170, 50, 35);

  fill(0);
  ellipse(265 + X, 170 + Y, 25, 25);
  ellipse(335 + X, 170 + Y, 25, 25);

  fill(255);
  ellipse(270 + X, 165 + Y, 7, 7);
  ellipse(340 + X, 165 + Y, 7, 7);

  // 코
  fill(240, 200, 190);
  triangle(295, 180, 305, 180, 300, 200);

  // 입
  fill(200, 50, 80);
  arc(300, 220 + mouth, 60, 40, 0, PI);

  // 목
  fill(255, 230, 220);
  rect(270, 255, 60, 70, 10);

  // 몸통
  fill('#091F92');
  rect(180 + body, 280, 240, 180, 40);

  stroke('#000000');
  strokeWeight(1);
  fill('#FFFFFF');
  rect(170 + body, 280, 60, 150, 50);
  rect(380 + body, 280, 60, 150, 50);

  // 단추
  fill(255);
  stroke(200);
  strokeWeight(2);
  ellipse(300, 330, 10, 10);
  ellipse(300, 370, 10, 10);
  noStroke();

  // 과잠 이니셜
  stroke(255, 0, 0);
  strokeWeight(8);
  fill(255);
  textSize(64);
  text("S", 320, 370);
}

// 키보드
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mysketch', 10);
  } else if (key === 'a' || key === 'A') {
    paused = !paused;
  }
}