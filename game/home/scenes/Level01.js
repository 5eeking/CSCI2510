class Level01 extends Scene {
    constructor() {
        super()
        this.instantiate(new GroundGameObject(), new Vector2(0, window.innerHeight/2))
        for (let i = -2000; i < 2000; i += 200) {
            this.instantiate(new GroundTextureGameObject, new Vector2(i, window.innerHeight/2))
        }

        this.instantiate(new QuestBoardGameObject(), new Vector2(0, -109))
        this.instantiate(new QuestBoardTextGameObject(), new Vector2(-30, -109))

        //this.instantiate(new TestGameObject())

        // let portalGameObject = this.instantiate(new PortalGameObject(), new Vector2(200, -80))
        // portalGameObject.addComponent(new PortalController())
        // let portalInside = this.instantiate(new PortalGameObject(), new Vector2(0, 0))
        // portalInside.transform.setParent(portalGameObject.transform)
        // portalInside.transform.scale = new Vector2(0.9, 0.95)
        // portalInside.getComponent(Polygon).fillStyle = "blue"

        this.instantiate(new LevelControllerGameObject())
    }
}