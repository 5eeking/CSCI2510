class DashController extends Component {
    update() {
        this.transform.scale = new Vector2(2 * (Globals.dashCooldown / 100), .1)
        //console.log(Globals.dashCooldown)
        if (Globals.dashCooldown < 100) {
            Globals.dashCooldown -= 1
        }
    }
}