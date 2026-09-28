class Level01 extends Scene {
    constructor() {
        super()
        this.instantiate(new GroundGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
        //this.instantiate(new SkyGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2 - 400))

        this.instantiate(new LevelControllerGameObject())
    }
}