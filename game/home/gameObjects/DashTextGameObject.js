class DashTextGameObject extends GameObject {
    constructor() {
        super("DashTextLabel")
        this.addComponent(new TextLabel(), {fillStyle: "white", text:"Dash"})
        this.transform.scale = new Vector2(2, 2)
    }
}