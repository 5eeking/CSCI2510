class LevelController extends Component {
    start() {
        SceneManager.loadScene(GenericLevel, true)
        this.mainPosition = 0
        /*if (Globals.playerPos != 0) {
            let gameObjects = GameObject.findGameObjectsByType(Transform)
            for (const gameObject of gameObjects) {
                gameObject.broadcastMessage("setPosition", [Globals.playerPos])
            }
            Camera.main.transform.position.x = 5000
            Globals.playerPos = 0
            console.log("working", Globals.playerPos)
        }*/
    }

    update() {
        // For future levels
        let mainGameObject = GameObject.find("Main")
        if (mainGameObject) {
            this.mainPosition = mainGameObject.transform.position
            //console.log(Camera.main.transform.position.x + window.innerWidth/2, Camera.main.transform.position.x - window.innerWidth/2)

            //if (this.mainPosition.x > 5000 || this.mainPosition.x < -5000) {
                if (this.mainPosition.x + 20 <= Camera.main.transform.position.x - window.innerWidth/2) {
                    this.changeScene(new Vector2(5000, this.mainPosition.y), "red", Level02)
                    console.log(this.mainPosition.x)
                }
                if (this.mainPosition.x - 20 >= Camera.main.transform.position.x + window.innerWidth/2) {
                    this.changeScene(new Vector2(-5000, this.mainPosition.y), "red", Level02)
                }
            //}
        }
    }

    changeScene(mainPos, color, scene) {
        Globals.groundColor = color
        //Globals.playerPos = mainPos
        SceneManager.loadScene(scene)
    }
}