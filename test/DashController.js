class DashController extends Component {
    dashCurrent = 0
    update() {
        /*** Player dash movement. ***/
        if (Input.keysDown.includes("ShiftLeft")) {
            if (this.dashCurrent == 0 && this.transform.position.x == window.innerWidth/2 - 50) {
                if (["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
                    this.dashCurrent = 1
                    this.transform.position.x += 96
                }
            }
        }
        if (this.transform.position.x > window.innerWidth/2 - 50) {
            this.transform.position.x -= 1
        } else {
            this.dashCurrent = 0
        }
    }
}