class DrawComponent extends Component {
    draw(ctx){

        let position = this.transform.position
        let dashCooldown = this.gameObject.components[0].dashCooldown

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        ctx.translate(position.x, position.y)

        ctx.beginPath()

        ctx.lineTo(-20, -20)
        ctx.lineTo(20, -20)
        ctx.lineTo(20, 20)
        ctx.lineTo(-20, 20)
        
        ctx.fillStyle = "pink"
        ctx.fill()

        // Signaling that I'm done drawing.
        /*ctx.restore()

        ctx.beginPath()
        ctx.font = "bold 20px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"

        ctx.fillText("Dash Cooldown", window.innerWidth/2, window.innerHeight/2 + 100)

        ctx.beginPath()
        ctx.rect(window.innerWidth/2 - 50, window.innerHeight/2 + 120, 100, 10)
        
        ctx.fillStyle = "gray"
        ctx.fill()

        ctx.beginPath()
        ctx.rect(window.innerWidth/2 - 48, window.innerHeight/2 + 122, 96 * (dashCooldown / 100), 6)

        ctx.fillStyle = "white"
        ctx.fill()*/
    }
}