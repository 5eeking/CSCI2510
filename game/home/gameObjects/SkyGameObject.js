class SkyGameObject extends GameObject {
    constructor() {
        super("Sky")
        this.addComponent(new Polygon(), {fillStyle:"skyblue", points:Assets.square})
        this.transform.scale = new Vector2(40, 20)
    }
}