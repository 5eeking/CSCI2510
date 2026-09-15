class UpdateComponent extends Component {

    start() {
        // this.player = new Player(window.innerWidth/2, window.innerHeight/2, 60, 60, 3, 0, 0)
        this.playerShape = new Vector2(20, 20)
        this.velocity = new Vector2(3, 0)
        this.ground = window.innerHeight/2
        this.groundx = 0
        this.gravity = 0.2
        this.dash = 0
        this.dashDir = 0
        this.dashCurrent = 0
        this.counterDash = 0.4
        this.jumpCurrent = 0
        this.dashCooldown = 0
    }

    update(){
        // console.log(Input.keysDown)

        /*** Player movement using A/D or </>. ***/
        /*if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")) {
            if (this.transform.position.x + this.playerShape.x < window.innerWidth){
                if (this.dashCurrent == 0) {
                    this.transform.position.x += this.velocity.x
                    this.dashDir = 1
                }
            }
        } else if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")) {
            if (this.transform.position.x - this.playerShape.x > 0) {
                if (this.dashCurrent == 0) {
                    this.transform.position.x -= this.velocity.x
                    this.dashDir = 2
                }
            }
        }*/

        /*** Player jump movement. ***/
        if (Input.keysDown.includes("Space")) {
            if (this.jumpCurrent == 0){
                this.velocity.y = -5
                this.transform.position.y -= 1
                this.jumpCurrent = 1
            }
        }

        if (this.transform.position.y + this.playerShape.y < this.ground) {
            if (this.velocity.y == 0){
                this.velocity.y = 5
            }
            this.transform.position.y += this.velocity.y
            if (this.velocity.y < 5) {
                this.velocity.y += this.gravity
            }
        } else {
            this.velocity.y = 0
            this.jumpCurrent = 0
        }

        /*** Player dash movement. ***/
        /*if (Input.keysDown.includes("ShiftLeft")) {
            if (this.dashCurrent == 0 && this.dashCooldown == 0) {
                if (["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
                    this.dash = 10
                    this.dashCurrent = 1
                    this.dashCooldown = 100
                }
            }
        }

        if (this.dash > 0 || this.dash < 0) {
            if (this.transform.position.x - this.dash - this.playerShape.x < 0 || this.transform.position.x + this.playerShape.x + this.dash > window.innerWidth || this.dash < 3) {
                this.dash = 0
                this.dashCurrent = 0
            }
            if (this.dashDir == 1) {
                this.transform.position.x += this.dash
            } else {
                this.transform.position.x -= this.dash
            }
            this.dash -= this.counterDash
        }

        if (this.dashCooldown > 0) {
            this.dashCooldown -= 1
        }*/
    }
}