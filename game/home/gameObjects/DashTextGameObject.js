class DashTextGameObject extends GameObject {
    constructor() {
        super("DashTextLabel", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "white", text:"Dash - LeftShift"})
        this.transform.scale = new Vector2(2, 2)
    }
}