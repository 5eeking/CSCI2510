class Quests extends Component {

    constructor(difficulty, questNum) {
        this.difficulty = difficulty
        this.questNum = questNum
    }

    quest = this.generateText(this.difficulty, this.questNum)

    generateText(difficulty, questNum) {
        switch (questNum) {
            case 1:
                let basicNum = this.generateDifficulty(difficulty, 5)
                this.createQuest(new KillBasicQuestGameObject, basicNum)
                return "Kill " + basicNum + " basic enemies."
            case 2:
                let eliteNum = this.generateDifficulty(difficulty, 1)
                this.createQuest(new KillEliteQuestGameObject, eliteNum)
                return "Kill " + eliteNum + " elite enemies."
            case 3:
                let collectNum = this.generateDifficulty(difficulty, 3)
                this.createQuest(new CollectRelicsQuestGameObject, collectNum)
                return "Collect " + collectNum + " relics."
            default:
                return "ERROR"
        }
    }

    generateDifficulty(difficulty, questMultiplier) {
        switch (difficulty) {
            case 1:
                return this.getRandomInteger(1, 5) * questMultiplier
            case 2:
                return this.getRandomInteger(5, 10) * questMultiplier
            case 3:
                return this.getRandomInteger(10, 15) * questMultiplier
            default:
                return 0
        }
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    createQuest(gameObject, goalNum) {
        currentGameObject = instantiate(gameObject)
        currentGameObject.addComponent(new QuestGoal, {goal: goalNum})
    }
}