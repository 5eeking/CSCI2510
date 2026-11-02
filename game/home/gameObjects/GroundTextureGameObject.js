class GroundTextureGameObject extends GameObject {
   constructor() {
       super("GroundTextureGameObject", [], "background")
       this.addComponent(new Polygon(), {fillStyle: Globals.groundTextureColor, points:Assets.square})
       this.transform.scale = new Vector2(3, 18)
   }
}