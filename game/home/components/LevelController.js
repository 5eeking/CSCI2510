class LevelController extends Component {
    start() {
        SceneManager.loadScene(GenericLevel, true)
        this.mainPosition = 0
        this.groundPosition = 0
    }

    update() {
        // For future levels
        let mainGameObject = GameObject.find("Main")
        let groundGameObject = GameObject.find("Ground")
        if (mainGameObject && groundGameObject) {
            this.mainPosition = mainGameObject.transform.position
            this.groundPosition = groundGameObject.transform.position

            if (this.mainPosition.x + 20 >= window.innerWidth) {
                this.changeScene(20, -6000, "red", Level02)
            }
            if (this.mainPosition.x - 20 <= 0) {
                this.changeScene(window.innerWidth - 20, 6000, "red", Level02)
            }
        }
    }

    changeScene(mainPos, groundPos, color, scene) {
        Globals.groundColor = color
        SceneManager.loadScene(scene)
        this.mainPosition.x = mainPos
        this.groundPosition.x = groundPos
    }
}