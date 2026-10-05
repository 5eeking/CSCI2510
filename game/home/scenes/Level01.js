class Level01 extends Scene {
    constructor() {
        super()
        this.instantiate(new GroundGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
        this.instantiate(new QuestBoardGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2 - 100))

        this.instantiate(new LevelControllerGameObject())
    }
}