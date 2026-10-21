class UpdateComponent extends Component {

    speed = 180
    start() {
        this.timeSinceLastLaser = 0
    }

    update(){
        this.timeSinceLastLaser += 1

        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x += Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x -= Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS"))
            this.transform.position.y += Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            this.transform.position.y -= Time.deltaTime * this.speed

        // if (this.timeSinceLastLaser > 15) {
        //     this.timeSinceLastLaser = 0
        //     let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
        //     if (Math.random() < .3) {
        //         laserGameObject.getComponent(Polygon).fillStyle = "#FF00A3"
        //     }
        // }

        // if (Input.keysDownThisFrame.includes("Space")) {
        //     let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
        //     if (Math.random() < .3) {
        //         laserGameObject.getComponent(Polygon).fillStyle = "#FF00A3"
        //     }
        // }

        Camera.main.transform.position = this.transform.position.clone()
        // Camera.main.transform.scale = new Vector2(2, 2)
        // Camera.main.transform.rotation = 1

        // const enemies = GameObject.findGameObjectsWithTag("Enemy")
        // for (const enemy of enemies) {
        //     if (Collisions.isCollisionPolygonPolygon(this.gameObject, enemy)) {
        //         console.log("Collision")
        //     }
        // }
    }

    onCollisionStay(other) {
        console.log(other)
    }

    onMouseOver() {
        console.log("Mouse Over")
    }
}