class Player extends GameObject {
  constructor({ position, image, ctx }) {
    super({ position, image, ctx })
  }

  flap() {
    this.velocity = -4
  }

  render () {
    this.ctx.drawImage(this.image, this.position.x, this.position.y, this.image.height, this.image.width)
  }

  update() {
    if (this.velocity < 2.0) {
      this.velocity += 0.2;
    }

    // As allows you to cast a float to an integer.
    this.position.y += this.velocity;
    if (this.position.y < 0.0) {
      this.position.y = 0.0;
    }

    // this.position.x += 1;

    this.render()
  }
}