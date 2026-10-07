class Level01 extends Scene {
    constructor() {
        super("black")
        // this.instantiate(new MainGameObject(), new Vector2(300, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(25, 100), Math.PI)
        // this.instantiate(new PointsGameObject(), new Vector2(5, 20))
        this.instantiate(new LevelControllerGameObject())
    }
}