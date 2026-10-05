class UpdateComponent extends Component {

    start() {
        this.playerShape = new Vector2(20, 20)
        this.velocity = new Vector2(450, 0)
        this.ground = window.innerHeight/2
        this.gravity = 1200
        this.dash = 0
        this.dir = 0
        this.dashCurrent = 0
        this.counterDash = 800
        this.jumpCurrent = 0
        this.laserCooldown = 0
    }

    update(){

        /*** Player jump movement. ***/
        if (Input.keysDown.includes("Space")) {
            if (this.jumpCurrent == 0){
                this.velocity.y = -400
                this.transform.position.y -= 1
                this.jumpCurrent = 1
            }
        }

        if (this.transform.position.y + this.playerShape.y < this.ground) {
            this.transform.position.y += Time.deltaTime * this.velocity.y
            if (this.velocity.y < 400) {
                this.velocity.y += Time.deltaTime * this.gravity
            }
        } else {
            this.jumpCurrent = 0
            this.transform.position.y = this.ground - this.playerShape.y
        }

        /*** Player movement using A/D or </>. ***/
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")) {
            if (this.dashCurrent == 0) {
                this.dir = 1
                this.transform.position.x += Time.deltaTime * this.velocity.x
            }
        } else if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")) {
            if (this.dashCurrent == 0) {
                this.dir = 2
                this.transform.position.x -= Time.deltaTime * this.velocity.x
            }
        }

        /*** Laser Creation ***/
        if (Input.keysDown.includes("KeyF") && this.laserCooldown == 0) {
            this.laserCooldown = 1
            let radians = 0
            if (this.dir == 1) {
                radians = Math.PI/2
            } else {
                radians = (3*Math.PI)/2
            }
            instantiate(new LaserGameObject(), this.transform.position.clone(), radians)
        } else {
            this.laserCooldown += 1
            if (this.laserCooldown == 10) {
                this.laserCooldown = 0
            }
        }

        /*** Player dash movement. ***/
        if (Input.keysDown.includes("ShiftLeft")) {
            if (this.dashCurrent == 0 && Globals.dashCooldown == 100) {
                if (["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
                    this.dash = 1000
                    this.dashCurrent = 1
                    Globals.dashCooldown = 99
                }
            }
        }
        if (this.dash < 0 < this.dash) {
            if (this.dash < 450) {
                this.dash = 0
                this.dashCurrent = 0
            }
            
            if (this.dir == 1) {
                this.transform.position.x += Time.deltaTime * this.dash
            } else {
                this.transform.position.x -= Time.deltaTime * this.dash
            }
            
            this.dash -= Time.deltaTime * this.counterDash
        }

        if (Globals.dashCooldown == 0) {
            Globals.dashCooldown = 100
            this.dashCurrent = 0
        }
        console.log(this.transform.position.x)
        if (this.transform.position.x < 5000 && this.transform.position.x > -5000) {
            Camera.main.transform.position = this.transform.position.clone()
        } else {
            Camera.main.transform.position.y = this.transform.position.clone().y
        }
    }

    setPosition(pos) {
        this.transform.position = pos
    }
}