class QuestGoal extends Component {

    start() {
        this.goal = 0
        this.currentCount = 0
    }

    update() {
        if (this.currentCount == this.goal) {
            // Do something in response to completing the goal
        }
    }

    updateGoal() {
        this.currentCount++
    }
}