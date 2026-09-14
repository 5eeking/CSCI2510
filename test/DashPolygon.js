class DashPolygon extends Component {
    draw(ctx){

        let position = this.transform.position
        //let dashCooldown = this.gameObject.components[0].dashCooldown

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        ctx.translate(position.x, position.y)

        ctx.beginPath()

        ctx.lineTo(this.transform.position.x > window.innerWidth/2 - 50 ? this.transform.position.x - (this.transform.position.x - window.innerWidth/2 - 50) : this.transform.position.x , -5)
        ctx.lineTo(this.transform.position.x > window.innerWidth/2 - 50 ? this.transform.position.x - (this.transform.position.x - window.innerWidth/2 - 50) + 100 : this.transform.position.x + 100, -5)
        ctx.lineTo(this.transform.position.x > window.innerWidth/2 - 50 ? this.transform.position.x - (this.transform.position.x - window.innerWidth/2 - 50) + 100 : this.transform.position.x + 100, 5)
        ctx.lineTo(this.transform.position.x > window.innerWidth/2 - 50 ? this.transform.position.x - (this.transform.position.x - window.innerWidth/2 - 50) : this.transform.position.x , 5)
        
        ctx.fillStyle = "gray"
        ctx.fill()

        ctx.translate(position.x, position.y)

        ctx.beginPath()

        ctx.lineTo(this.transform.position.x > window.innerWidth/2 - 50 ? this.transform.position.x - (this.transform.position.x - window.innerWidth/2 - 50) + 2 : this.transform.position.x + 2, -3)
        ctx.lineTo(this.transform.position.x + 2, -3)
        ctx.lineTo(this.transform.position.x + 2, 3)
        ctx.lineTo(this.transform.position.x > window.innerWidth/2 - 50 ? this.transform.position.x - (this.transform.position.x - window.innerWidth/2 - 50) + 2 : this.transform.position.x + 2, 3)
        
        ctx.fillStyle = "white"
        ctx.fill()

        // Signaling that I'm done drawing.
        ctx.restore()
    }
}