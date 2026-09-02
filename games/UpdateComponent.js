class UpdateComponent extends Component {
    position

    start() {
        this.position = new Vector2(50, 50)
    }

    update(){
        // console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.position.x += 5
        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.position.x -= 5
        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS"))
            this.position.y += 5
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            this.position.y -= 5
    }
}