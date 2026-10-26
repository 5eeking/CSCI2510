class Level02 extends Scene {
    constructor() {
        super()
        this.instantiate(new GroundGameObject(), new Vector2(0, window.innerHeight/2))
        for (let i = -2000; i < 2000; i += 200) {
            this.instantiate(new GroundTextuGameObject, new Vector2(i, window.innerHeight/2))
        }

        this.instantiate(new QuestBoardGameObject(), new Vector2(0, -100))
        
        this.instantiate(new LevelControllerGameObject())
    }
}