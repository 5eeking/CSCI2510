class QuestGameObject extends GameObject {
   constructor() {
       super("QuestGameObject", ["Quest"])
       this.addComponent(new Quests())
       this.addComponent(new QuestGoal())
   }
}