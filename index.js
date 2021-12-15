const canvas = document.getElementById('gamecanvas')
const ctx = canvas.getContext('2d')

const player = new Player({ position: { x: 16, y: 0 },  image: './img/dragon.png', ctx })

const objects = [player]

window.onload = function () {
  let fps = 60
  let fpsInterval
  let startTime
  let now
  let then
  let elapsed

  startAnimating()

  function startAnimating() {
    fpsInterval = 1000 / fps
    then = window.performance.now()
    startTime = then
    console.log(startTime)
    animate()
  }

  function animate() {

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      then = now - (elapsed % fpsInterval);

      // Put your drawing code here
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let index = 0; index < objects.length; index++) {
        const object = objects[index]
        object.update()

        if (object instanceof Player) {
          if (player.position.y > canvas.height) {
            objects.splice(index, 1)
          }
        }
      }
    }
  }

  animate()

  canvas.addEventListener('keypress', function (ev) {
    if (ev.code === 'Space') {
      player.flap()
    }
  })
}
