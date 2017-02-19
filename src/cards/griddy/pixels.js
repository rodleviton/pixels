import Pixel from './Pixel';

class Pixels {
  constructor(canvas) {
    this.c = canvas;
    this.ctx = this.c.getContext('2d');
    this.grid = [];
    this.cols = 0;
    this.rows = 0;
    this.cellSize = 40;
    this.cellSpacing = 0;
    this.borderColour = '#253F86';
    this.cellColour = '#F68B8F';
    this.baseColour = '#FF5A60';
    this.gradientStart = '#777777';
    this.gradientEnd = '#000000';
    this.animatedPixels = [];
    this.cellColours = [
      { r: 35, g: 41, b: 97 },
      { r: 39, g: 45, b: 107 },
      { r: 40, g: 76, b: 164 },
      { r: 45, g: 67, b: 151 },
      { r: 77, g: 144, b: 242 },
    ];
  }

  drawGrid() {
    this.cols = Math.ceil(this.c.offsetHeight / (this.cellSize + this.cellSpacing));
    this.rows = Math.ceil(this.c.offsetWidth / (this.cellSize + this.cellSpacing));

    for (let x = 0; x < this.rows; x += 1) {
      for (let y = 0; y < this.cols; y += 1) {
        const pixelColour = this.cellColours[Math.floor(Math.random() * this.cellColours.length)];
        const pixel = {
          x: (x * (this.cellSize + this.cellSpacing)),
          y: (y * (this.cellSize + this.cellSpacing)),
          width: this.cellSize,
          height: this.cellSize,
          colour: pixelColour,
        };

        this.grid.push(new Pixel(this.ctx, pixel));
      }
    }

    // Draw pixels onto canvas
    this.grid.forEach((pixel) => {
      pixel.draw();
    });
  }

  loop() {
    this.animatedPixels.forEach((pixel) => {
      pixel.fade();
    });

    // Draw pixels onto canvas
    this.grid.forEach((pixel) => {
      pixel.draw();
    });

    this.ligthenGradient(160, 230, 300);

    requestAnimationFrame(this.loop.bind(this));
  }

  animate() {
    this.drawGrid();
    this.ligthenGradient(160, 230, 300);
    this.generateRandomPixels();
    this.loop();
  }

  generateRandomPixels() {
    // select an random collection of cells
    this.animatedPixels = [];

    for (let i = 0; i < 20; i += 1) {
      const target = this.grid[Math.floor(Math.random() * this.grid.length)];
      const pixelColour = this.cellColours[Math.floor(Math.random() * this.cellColours.length)];

      // determine end color for each
      target.stage = 0.0;
      target.endColour = pixelColour;
      target.speed = Math.floor(Math.random() * 10000);
      this.animatedPixels.push(target);
    }

    setTimeout(() => {
      this.generateRandomPixels();
    }, 4000);
  }

  // start transition loop
  ligthenGradient(x, y, radius) {
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter';

    const radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
    radialGradient.addColorStop(0.0, this.gradientStart);
    radialGradient.addColorStop(0.8, this.gradientEnd);
    this.ctx.fillStyle = radialGradient;

    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.restore();
  }
}

export default Pixels;
