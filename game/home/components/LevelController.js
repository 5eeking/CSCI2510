class LevelController extends Component {
    start() {
        // Loads the first scene.
        SceneManager.loadScene(GenericLevel, true)
    }

    update() {
        // Changes the scene when the player goes off screen
        // dependant on the camera position. Also changing the color of the ground at the same time.
        let mainGameObject = GameObject.find("Main")
        if (mainGameObject) {
            let mainPosition = mainGameObject.transform.position
            if (mainPosition.x + 20 <= Camera.main.transform.position.x - window.innerWidth/2) {
                if (Globals.currentScene == 1) {
                    Globals.currentScene = 2
                    this.changeScene("red", "darkred", Level02)
                } else {
                    Globals.currentScene = 1
                    this.changeScene("green", "darkgreen", Level01)
                }
            }
            if (mainPosition.x - 20 >= Camera.main.transform.position.x + window.innerWidth/2) {
                if (Globals.currentScene == 1) {
                    Globals.currentScene = 2
                    this.changeScene("red", "darkred", Level02)
                } else {
                    Globals.currentScene = 1
                    this.changeScene("green", "darkgreen", Level01)
                }
            }
        }
    }

    // Changes the scene with the information given.
    changeScene(color1, color2, scene) {
        Globals.groundColor = color1
        Globals.groundTextureColor = color2
        SceneManager.loadScene(scene)
    }
}