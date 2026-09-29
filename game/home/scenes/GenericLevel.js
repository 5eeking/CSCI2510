class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(window.innerWidth/2, 300))
        this.instantiate(new DashGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2 + 70))
        this.instantiate(new DashTextGameObject(), new Vector2(window.innerWidth/2 - 60, window.innerHeight/2 + 50))
    }
}