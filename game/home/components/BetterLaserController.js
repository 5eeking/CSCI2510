class BetterLaserController extends Component {
   
   fire = false
   velocity
   radians = 0
   speed = 400

   update() {
      if (this.fire) {
         if (!this.velocity) {
            this.velocity = new Vector2(this.speed * Math.cos(this.radians), this.speed * Math.sin(this.radians))
            console.log(this.velocity)
         }
         this.transform.position.x += Time.deltaTime * this.velocity.x
         this.transform.position.y += Time.deltaTime * this.velocity.y

         // Destroys the laser if it goes off screen dependant on the camera position.
         if (this.transform.position.x < Camera.main.transform.position.x - window.innerWidth || 
            this.transform.position.x > Camera.main.transform.position.x + window.innerWidth ||
            this.transform.position.y < Camera.main.transform.position.y - window.innerHeight ||
            this.transform.position.y > Camera.main.transform.position.y + window.innerHeight) {
               this.gameObject.destroy()
         }

      } else {
         let mainGameObject = GameObject.find("Main")
         this.radians = this.getMouseAngle(Input.mousePosition, new Vector2(window.innerWidth/2, window.innerHeight/2))
         this.transform.position = this.getCircularPosition(mainGameObject.transform.position, this.radians)
         this.transform.rotation = this.radians + Math.PI/2
      }
   }

   getMouseAngle(mousePos, playerPos) {
      let x = mousePos.x - playerPos.x
      let y = mousePos.y - playerPos.y
      let mouseAngle = Math.atan2(y, x)
      return mouseAngle
   }

   getCircularPosition(playerPos, angle) {
      let xPos = playerPos.x + 50 * Math.cos(angle)
      let yPos = playerPos.y + 50 * Math.sin(angle)
      return new Vector2(xPos, yPos)
   }

   fireLaser() {
      this.fire = true
   }

   onTriggerStay(other) {
      if (other.name == "GroundGameObject") {
         this.gameObject.destroy()
      }
   }
}