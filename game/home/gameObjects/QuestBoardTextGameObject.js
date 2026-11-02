class QuestBoardTextGameObject extends GameObject {
   constructor() {
       super("QuestBoardTextGameObject", [], "background")
       this.addComponent(new TextLabel(), {fillStyle: "white", text:"Quests"})
       // this.addComponent(new QuestBoardTextController())
       this.transform.scale = new Vector2(2, 2)
   }
}