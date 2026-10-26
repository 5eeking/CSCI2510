class DashController extends Component {
    /*** Dash cooldown bar controller */
    update() {
        // Changes the cooldown bar scale dependant on dash cooldown.
        this.transform.scale = new Vector2(2 * (Globals.dashCooldown / 100), .1)

        // Updates the dash cooldown until it is available again.
        if (Globals.dashCooldown < 100) {
            Globals.dashCooldown -= 1
        }
    }
}