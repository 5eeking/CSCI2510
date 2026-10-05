class EnemyGameObject extends GameObject {
    constructor() {
        super("Enemy", ["Enemy"], "ships")
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:2})
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.triangle})
        this.transform.scale = new Vector2(2, 2)
    }
}