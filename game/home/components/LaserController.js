class LaserController extends Component {
    update() {
        // Changes the direction of the laser travel dependant on the way the laser is facing.
        let dir = 0
        if (this.transform.rotation == Math.PI/2) {
            dir = 1
        } else {
            dir = -1
        }

        // Moves the laser across the screen.
        this.transform.position.x += Time.deltaTime * 800 * dir

        // Destroys the laser if it goes off screen dependant on the camera position.
        if (this.transform.position.x < Camera.main.transform.position.x - window.innerWidth || this.transform.position.x > Camera.main.transform.position.x + window.innerWidth) {
            this.gameObject.destroy()
        }
    }
}