class QuestBoardPopupGameObject extends GameObject {
   constructor() {
       super("QuestBoardPopupGameObject", [], "UI")
       this.addComponent(new Polygon(), {fillStyle: "#ae7a26F2", points:Assets.square})
       //this.addComponent(new QuestBoardPopupController())
       this.transform.scale = new Vector2(20, 15)
   }
}