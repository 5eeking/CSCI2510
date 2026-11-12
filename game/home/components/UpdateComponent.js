class UpdateComponent extends Component {

    start() {
        this.playerShape = new Vector2(20, 20)
        this.velocity = new Vector2(450, 0)
        this.dash = 0
        this.dir = 0
        this.dashCurrent = 0
        this.counterDash = 800
        this.isGrounded = false
        this.laserCooldown = 0
        this.rigidBody = this.gameObject.getComponent(RigidBody)
        this.lastJumpTime = -100
    }

    // playerShape = new Vector2(20, 20)
    // velocity = new Vector2(450, 0)
    // ground = 0
    // gravity = 1200
    // dash = 0
    // dir = 0
    // dashCurrent = 0
    // counterDash = 800
    // jumpCurrent = 0
    // laserCooldown = 0

    fixedUpdate() {
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

        // Dash Movement
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

        this.isGrounded = false
    }

    update(){

        if (Input.mouseButtonsDownThisFrame) {
            //console.log(Input.mouseButtonsDownThisFrame)
        }

        /*** Player jump movement. ***/
        if (Input.keysDown.includes("Space") && this.isGrounded) {
            this.rigidBody.velocity.y = -300
            this.lastJumpTime = Time.time
        }

        if (Input.keysDown.includes("Space") && Time.time - this.lastJumpTime < .2) {
            this.rigidBody.velocity.y = -300
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
        }

        let betterLaserGameObject = GameObject.findGameObjectsWithTag("Better")
        if (Input.keysDown.includes("KeyR") && this.laserCooldown == 0) {
            //console.log("working")
            this.laserCooldown = -1
            instantiate(new BetterLaserGameObject(), this.transform.position.clone())
        }

        if (Input.keysUpThisFrame.includes("KeyR") && this.laserCooldown == -1) {
            //console.log("working")
            this.laserCooldown = 1
            for (const gameObject of betterLaserGameObject) {
                gameObject.broadcastMessage("fireLaser", [])
            }
        }

        if (this.laserCooldown != 0 && this.laserCooldown != -1) {
            this.laserCooldown += 1
            if (this.laserCooldown == 20) {
                this.laserCooldown = 0
            }
        }

        /*** Dash Activation ***/
        if (Input.keysDown.includes("ShiftLeft")) {
            if (this.dashCurrent == 0 && Globals.dashCooldown == 100) {
                if (["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].some(sub => Input.keysDown.includes(sub))) {
                    this.dash = 1000
                    this.dashCurrent = 1
                    Globals.dashCooldown = 99
                }
            }
        }

        if (Globals.dashCooldown == 0) {
            Globals.dashCooldown = 100
            this.dashCurrent = 0
        }
        //console.log(this.transform.position.x)
        if (this.transform.position.x < 500 && this.transform.position.x > -500) {
            Camera.main.transform.position = this.transform.position.clone()
        } else {
            Camera.main.transform.position.y = this.transform.position.clone().y
        }
    }

    onCollisionStay(other, minimumTransformVector) {
        this.gameObject.getComponent(RigidBody).velocity.y = 0
        this.isGrounded = true
    }
}