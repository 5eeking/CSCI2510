class StartLevel extends Scene {
    constructor() {
        super()
        
        this.instantiate(new StartBackgroundGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
        this.instantiate(new StartButtonGameObject(), new Vector2(0, 0))
        this.instantiate(new StartButtonTextGameObject(), new Vector2(window.innerWidth/2 - 30, window.innerHeight/2 + 5))
        this.instantiate(new GameNameTextGameObject(), new Vector2(window.innerWidth/2 - 55, window.innerHeight/2 - 100))

        this.instantiate(new LevelControllerGameObject())
    }
}