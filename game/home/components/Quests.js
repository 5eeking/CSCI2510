class Quests extends Component {
    // Creates quest text, goal numbers, and changes game object tags when instantiated.
    constructor(difficulty, questNum) {
        super()
        this.difficulty = difficulty
        this.questNum = questNum
    }

    questText = undefined

    update() {
        if (!this.questText) {
            this.questText = this.generateText(this.difficulty, this.questNum)
            console.log(this.questText)
            // console.log(this.gameObject.tags)
            // console.log(this.gameObject.getComponent(QuestGoal).goal)
        }
    }

    generateText(difficulty, questNum) {
        switch (questNum) {
            case 1:
                let basicNum = this.generateDifficulty(difficulty, 5)
                this.gameObject.getComponent(QuestGoal).goal = basicNum
                this.gameObject.tags.push("basic")
                return "Kill " + basicNum + " basic enemies."
            case 2:
                let eliteNum = this.generateDifficulty(difficulty, 1)
                this.gameObject.getComponent(QuestGoal).goal = eliteNum
                this.gameObject.tags.push("elite")
                return "Kill " + eliteNum + " elite enemies."
            case 3:
                let collectNum = this.generateDifficulty(difficulty, 3)
                this.gameObject.getComponent(QuestGoal).goal = collectNum
                this.gameObject.tags.push("collect")
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
}