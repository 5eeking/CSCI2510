class Quests extends Component {
    // Creates quest text, goal numbers, and changes game object tags when instantiated.

    difficulty = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    questNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    questText = undefined
    difficultyText = ""
    rewardText = ""

    update() {
        if (!this.questText) {
            this.questText = this.generateText(this.difficulty, this.questNum)
            //console.log(this.questText)
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
        let difficultyNum = 0
        let reward = 0
        switch (difficulty) {
            case 1:
                this.difficultyText = "Easy Difficulty"
                difficultyNum = this.getRandomInteger(1, 4) * questMultiplier
                reward = Math.floor(difficultyNum * 15 / questMultiplier)
                this.gameObject.getComponent(QuestGoal).reward = reward
                this.rewardText = "Recieve " + reward + " coins."
                return difficultyNum
            case 2:
                this.difficultyText = "Medium Difficulty"
                difficultyNum = this.getRandomInteger(5, 9) * questMultiplier
                reward = Math.floor(difficultyNum * 25 / questMultiplier)
                this.gameObject.getComponent(QuestGoal).reward = reward
                this.rewardText = "Recieve " + reward + " coins."
                return difficultyNum
            case 3:
                this.difficultyText = "Hard Difficulty"
                difficultyNum = this.getRandomInteger(10, 15) * questMultiplier
                reward = Math.floor(difficultyNum * 35 / questMultiplier)
                this.gameObject.getComponent(QuestGoal).reward = reward
                this.rewardText = "Recieve " + reward + " coins."
                return difficultyNum
            default:
                return 0
        }
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}