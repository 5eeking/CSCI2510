class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(window.innerWidth/2, 300))
        mainGameObject.addComponent(new UpdateComponent())
        let playerInside = this.instantiate(new MainGameObject(), new Vector2(0, 0))
        playerInside.transform.setParent(mainGameObject.transform)
        playerInside.transform.scale = new Vector2(0.9, 0.9)
        playerInside.getComponent(Polygon).fillStyle = "pink"
        this.instantiate(new DashGameObject(), new Vector2(window.innerWidth/2, 40))
        this.instantiate(new DashTextGameObject(), new Vector2(window.innerWidth/2 - 68, 20))
        //this.instantiate(new TestTextGameObject(), new Vector2(window.innerWidth/2 , 400))
        Camera.main.backgroundColor = "skyblue"
    }
}