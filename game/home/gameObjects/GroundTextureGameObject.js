class GroundTextuGameObject extends GameObject {
   constructor() {
       super("GroundTextureGameObject", [], "foreground")
       this.addComponent(new Polygon(), {fillStyle: "darkgreen", points:Assets.square})
       this.transform.scale = new Vector2(10, 30)
   }
}