class GameObject {
  constructor ({ position, image, ctx }) {
    this.position = position || {
      x: 0,
      y: 0,
    }

    this.velocity = 0

    this.image = new Image(64, 64)
    this.image.src = image

    this.ctx = ctx
  }

  render () {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.position.x, this.position.y, 64, 64)
  }

  update () {
    throw new Error('You have not implemented this!')
  }
}
