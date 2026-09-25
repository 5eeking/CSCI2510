class DashController extends Component {
    update() {
        let mainGameObject = GameObject.find("Main")
        if (mainGameObject) {
            let dashCooldown = mainGameObject.getComponent(Dash).dashCooldown
            this.transform.scale = new Vector2(2 * (dashCooldown / 100), .1)
            console.log(dashCooldown)
            if (dashCooldown < 100) {
                dashCooldown -= 1
                console.log("working")
            }
        }
    }
}