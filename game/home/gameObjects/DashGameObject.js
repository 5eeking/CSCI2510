class DashGameObject extends GameObject {
    constructor() {
        super("Dash", [], "UI")
        this.addComponent(new DashController())
        this.addComponent(new Polygon(), {fillStyle:"white", points:Assets.square})
        this.transform.scale = new Vector2(2, .1)
    }
}