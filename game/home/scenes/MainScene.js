class MainScene extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(window.innerWidth/2, 200))
        this.instantiate(new GroundGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
        this.instantiate(new DashGameObject(), new Vector2(window.innerWidth/2 - 50, window.innerHeight/2 + 50))
    }
}