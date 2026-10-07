class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(300, 300))
        this.instantiate(new PointsGameObject(), new Vector2(5, 20))
        // Camera.main.backgroundColor = "cyan"

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(50, 50))

        helperGameObject.transform.setParent(mainGameObject.transform)
    }
}