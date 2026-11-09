class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new CarGameObject(), new Vector2(0,0), 0)
  }
}
