let cookie;
let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;
let button;
let cookieImage;

function preload() {
  cookieImage = loadImage('Cookie1.png'); // Replace with the path to your image file
}

function setup() {
  createCanvas(400, 400);
  cookie = new Cookie(width / 2, height / 2, 100);

  button = createButton("Upgrade Click (+1 per click)");
  button.position(width / 2 - 80, height - 50);
  button.mousePressed(buyUpgrade);
}

function draw() {
  background(255, 230, 200);

  // Draw cookie
  cookie.display();

  // Display points
  fill(50);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(`Points: ${points}`, width / 2, 30);

  // Display upgrade cost
  textSize(16);
  text(`Upgrade Cost: ${upgradeCost} points`, width / 2, height - 80);
}

function mousePressed() {
  if (cookie.isClicked(mouseX, mouseY)) {
    points += pointsPerClick;
  }
}

function buyUpgrade() {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    pointsPerClick++;
    upgradeCost = floor(upgradeCost * 1.5);
  }
}

class Cookie {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    imageMode(CENTER);
    image(cookieImage, this.x, this.y, this.size, this.size);
  }

  isClicked(mx, my) {
    return dist(mx, my, this.x, this.y) < this.size / 2;
  }
}

