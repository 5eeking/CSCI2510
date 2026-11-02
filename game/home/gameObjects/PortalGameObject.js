class PortalGameObject extends GameObject {
   constructor() {
       super("PortalGameObject", [], "foreground")
       this.addComponent(new Polygon(), {fillStyle: "brown", points:Assets.square})
       this.addComponent(new PortalController())
       this.transform.scale = new Vector2(2, 4)
   }
}