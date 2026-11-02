class StartButtonTextGameObject extends GameObject {
    constructor() {
        super("StartbuttonTextGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "white", text:"START"})
        this.transform.scale = new Vector2(2, 2)
    }
}