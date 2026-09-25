class GroundController extends Component {
    dashCurrent = 0
    dashCooldown = 0
    dashDir = 0
    vx = 8
    dash = 0
    counterDash = 0.4
    update() {
        /*** Player movement using A/D or </>. ***/

        /*if (this.transform.position.x - this.vx > -6000) {
            if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")) {
                if (this.dashCurrent == 0) {
                    this.transform.position.x -= this.vx
                    this.dashDir = 1
                }
            }
        }
        if (this.transform.position.x + this.vx < 6000) {
            if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")) {
                    if (this.dashCurrent == 0 ) {
                        this.transform.position.x += this.vx
                        this.dashDir = 2
                    }
                }
        } 
        if (!["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
            this.dashDir = 0
        }*/

        /*** Player dash movement. ***/
        /*if (-6000 < this.transform.position.x < 6000) {
            if (Input.keysDown.includes("ShiftLeft")) {
                if (this.dashCurrent == 0 && this.dashCooldown == 0 && this.dashDir != 0) {
                    if (["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
                        this.dash = 20
                        this.dashCurrent = 1
                        this.dashCooldown = 100
                    }
                }
            }

            if (this.dash > 0 || this.dash < 0) {
                if (this.transform.position.x + this.dash > 6000 || this.transform.position.x - this.dash < -6000 || this.dash < this.vx) {
                    this.dash = 0
                    this.dashCurrent = 0
                }
                if (this.dashDir == 1) {
                    this.transform.position.x -= this.dash
                } else {
                    this.transform.position.x += this.dash
                }
                this.dash -= this.counterDash
            }

            if (this.dashCooldown > 0) {
                this.dashCooldown -= 1
            }
        }*/
    }
}