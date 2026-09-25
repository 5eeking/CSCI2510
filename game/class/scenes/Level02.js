class Level02 extends Scene {
    constructor() {
        super()
        // this.instantiate(new MainGameObject(), new Vector2(300, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(25, 100), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(125, 100), Math.PI)
        // this.instantiate(new PointsGameObject(), new Vector2(5, 20))
        this.instantiate(new LevelControllerGameObject())
    }
}