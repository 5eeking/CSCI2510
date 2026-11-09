class CarGameObject extends GameObject{
  constructor(){
    super("CarGameObject", [], "default")
    this.addComponent(new Polygon(), {fillStyle: "red", points: Assets.triangle})
    this.addComponent(new CarController())
    this.addComponent(new Collider())
    this.transform.scale = new Vector2(20, 20)
  }
}
