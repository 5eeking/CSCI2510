class TestTextGameObject extends GameObject {
    constructor() {
        super("TestTextLabel", [], "UI")
        this.addComponent(new MultiTextLabel(), {fillStyle: "white", text:"Hello World, How are you today?", maxLength: 50})
        this.transform.scale = new Vector2(2, 2)
    }
}