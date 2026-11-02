class GameNameTextGameObject extends GameObject {
    constructor() {
        super("GameNameTextGameObject", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle: "white", text:"HOME"})
        this.transform.scale = new Vector2(4, 4)
    }
}