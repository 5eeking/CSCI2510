class QuestGameObject extends GameObject {
   constructor() {
       super("QuestGameObject", ["Quest"])
       let difficulty = Math.floor(Math.random() * (3 - 1 + 1)) + 1
       let questNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1
       this.addComponent(new Quests(difficulty, questNum))
       this.addComponent(new QuestGoal())
   }
}