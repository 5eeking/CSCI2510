class LaserController extends Component {
    update() {
        let dir = 0
        if (this.transform.rotation == Math.PI/2) {
            dir = 1
        } else {
            dir = -1
        }
        this.transform.position.x += Time.deltaTime * 800 * dir

        if (this.transform.position.x < 0 || this.transform.position.x > window.innerWidth) {
            this.gameObject.destroy()
        }
    }
}