class QuestBoardPopupGameObject extends GameObject {
   constructor() {
       super("QuestBoardPopupGameObject", [], "UI")
       this.addComponent(new Polygon(), {fillStyle: "#ae7a26f3", points:Assets.square})
       //this.addComponent(new QuestBoardPopupController())
       this.transform.scale = new Vector2(400, 300)
   }
}