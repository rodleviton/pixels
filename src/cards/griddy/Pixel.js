export default class Pixel {
  constructor(ctx, pixel) {
    this.ctx = ctx;
    this.x = pixel.x;
    this.y = pixel.y;
    this.height = pixel.height;
    this.width = pixel.width;
    this.colour = pixel.colour;
    this.startColour = this.colour;
    this.endColour = this.colour;

    // Shadow props
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 0.5;
    this.ctx.shadowColor = '#000000';
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;

    // animation
    this.stage = 0.0;
    this.speed = 5000;
  }

  drawShadow(blur) {
    const offset = 0.5;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.clip();
    this.ctx.beginPath();
    this.ctx.shadowBlur = blur;
    this.ctx.rect(this.x - offset, this.y - offset, this.width + offset, this.height + offset);
    this.ctx.stroke();
    this.ctx.restore();
  }

  draw() {
    this.ctx.fillStyle = `rgb(${this.colour.r},${this.colour.g},${this.colour.b})`;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.drawShadow(6);
  }

  // linear interpolation between two values a and b
  // u controls amount of a/b and is in range [0.0,1.0]
  lerp(a, b) {
    /* eslint-disable */
    return (1 - this.stage) * a + this.stage * b;
  }

  fade() {
    this.increment = 1.0 / this.speed;
    const start = this.startColour;
    const end = this.endColour;

    // const isSameColour = JSON.stringify(this.colour) === JSON.stringify(this.endColour);

    if (this.stage <= 1.0) {
      const newColour = {
        r: parseInt(this.lerp(start.r, end.r), 10),
        g: parseInt(this.lerp(start.g, end.g), 10),
        b: parseInt(this.lerp(start.b, end.b), 10),
      };

      this.colour = newColour;
      this.startColour = newColour;
      this.stage += this.increment;
    }
  }
}
