class StartButtonHighlightGameObject extends GameObject {
   constructor() {
       super("StartButtonHighlightGameObject", [], "background")
       this.addComponent(new Polygon(), {fillStyle: "#403f3fd8", points:Assets.square})
       // this.addComponent(new StartButtonHighlightController())
       this.transform.scale = new Vector2(84, 84)
   }
}