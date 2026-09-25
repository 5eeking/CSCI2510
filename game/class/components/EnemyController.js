class EnemyController extends Component {
    direction = 1
    points = 0
    update() {
        this.transform.position.x += Time.deltaTime * 150 * this.direction
        if (this.transform.position.x > window.innerWidth - 20) {
            this.direction = -1
        }
        if (this.transform.position.x < 20) {
            this.direction = 1
        }
        let pointsGameObject = GameObject.find("PointsGameObject")
        if (this.gameObject.getComponent(Health).health <= 0) {
            this.gameObject.destroy()
            this.points += 10
            if (pointsGameObject) {
                let pointsText = pointsGameObject.getComponent(TextLabel).text
                pointsText = this.points + " points"
                console.log(pointsText)
            }
        }
    }
}