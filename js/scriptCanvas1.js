// Setup canvas
let canvas = document.getElementById("canvas");
let front = document.querySelector(".bubble");
let c = canvas.getContext("2d");
let width = (canvas.width = 300);
let height = (canvas.height = 400);

class Circle {
  constructor(x, y, dx, dy, rad, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
    c.fillStyle = `rgb(${this.r},${this.g},${this.b})`;
    c.lineWidth = 5;
    c.fill();
  }

  update() {
    if (this.x + this.rad > width || this.x - this.rad < 0) this.dx = -this.dx;
    if (this.y + this.rad > height || this.y - this.rad < 0) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

front.addEventListener("mouseover", function () {
  let circleArray = [];
  for (let i = 0; i < 30; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    let dx = Math.random() * 10;
    let dy = Math.random() * 10;
    let rad = Math.random() * 35;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    circleArray.push(new Circle(x, y, dx, dy, rad, r, g, b));
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  animate();
});
