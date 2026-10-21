class MainGameObject extends GameObject {
    constructor() {
        super("Main", [], "ships")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"pink", points:Assets.square})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(2, 2)
    }
}