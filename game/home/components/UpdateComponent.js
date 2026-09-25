class UpdateComponent extends Component {

    start() {
        // this.player = new Player(window.innerWidth/2, window.innerHeight/2, 60, 60, 3, 0, 0)
        this.playerShape = new Vector2(20, 20)
        this.velocity = new Vector2(300, 0)
        this.groundvx = 450
        this.ground = window.innerHeight/2
        this.groundx = 0
        this.gravity = 1200
        this.dash = 0
        this.dir = 0
        this.dashCurrent = 0
        this.counterDash = 600
        this.jumpCurrent = 0
        this.edgeOffset = 200
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
        let groundGameObject = GameObject.find("Ground")
        let groundPosition = 0
        if (groundGameObject) {
            groundPosition = groundGameObject.transform.position
            if (-6000 < groundPosition.x < 6000) {
                if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")) {
                    if (this.dashCurrent == 0) {
                        this.dir = 1
                        if (this.transform.position.x + this.playerShape.x < window.innerWidth - this.edgeOffset){
                            this.transform.position.x += Time.deltaTime * this.velocity.x
                        }
                        if (groundPosition.x - this.groundvx > -6000) {
                            groundGameObject.transform.position.x -= Time.deltaTime * this.groundvx
                            this.edgeOffset = 200
                        } else {
                            this.edgeOffset = 0
                        }
                    }
                } else if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")) {
                    if (this.dashCurrent == 0) {
                        this.dir = 2
                        if (this.transform.position.x - this.playerShape.x > this.edgeOffset) {
                            this.transform.position.x -= Time.deltaTime * this.velocity.x
                        }
                        if (groundPosition.x + this.groundvx < 6000) {
                            groundGameObject.transform.position.x += Time.deltaTime * this.groundvx
                            this.edgeOffset = 200
                        } else {
                            this.edgeOffset = 0
                        }
                    }
                }
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
        let dashCooldown = this.gameObject.getComponent(Dash).dashCooldown
        if (Input.keysDown.includes("ShiftLeft")) {
            if (this.dashCurrent == 0 && dashCooldown == 100) {
                if (["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
                    this.dash = 600
                    this.dashCurrent = 1
                    dashCooldown = 99
                    console.log(this.dash)
                    console.log(dashCooldown)
                }
            }
        }
        console.log(dashCooldown)
        if (this.dash < 0 < this.dash) {
            if (this.transform.position.x - this.playerShape.x - (Time.deltaTime * this.dash) < this.edgeOffset || this.transform.position.x + this.playerShape.x + (Time.deltaTime * this.dash) > window.innerWidth - this.edgeOffset ||
                groundPosition.x + this.dash > 6000 || groundPosition.x - this.dash < -6000 ||
                this.dash < 300) {
                this.dash = 0
                this.dashCurrent = 0
            }
            if (this.dir == 1) {
                this.transform.position.x += Time.deltaTime * this.dash
                groundPosition.x -= Time.deltaTime * this.dash
            } else {
                this.transform.position.x -= Time.deltaTime * this.dash
                groundPosition.x += Time.deltaTime * this.dash
            }
            this.dash -= Time.deltaTime * this.counterDash
            console.log(this.dash, Time.deltaTime * this.counterDash)
        }

        if (dashCooldown == 0) {
            console.log("working")
            dashCooldown = 100
            this.dashCurrent = 0
        }
    }
}