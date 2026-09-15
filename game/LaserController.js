class LaserController extends Component {
    update() {
        this.transform.position.y -= 5

        if (this.transform.position.y < 0) {
            this.gameObject.destroy()
        }
    }
}