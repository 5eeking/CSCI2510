class CarController extends Component {
  speed = 50
  start() {
    velocity = 0
  }

  update() {
    //Check to see if the right arrow key is down.
    //If it is, move our character right
    if (Input.keysDown.includes("ArrowRight"))
      this.transform.rotation += 1

    //Check to see if the left arrow key is down.
    //If it is, move our character left
    if (Input.keysDown.includes("ArrowLeft"))
      this.transform.rotation -= 1

    //Check to see if the up arrow key is down.
    //If it is, move our character up
    if (Input.keysDown.includes("ArrowUp"))
      

    //Check to see if the down arrow key is down.
    //If it is, move our character down
    if (Input.keysDown.includes("ArrowDown"))
      

  }
}
