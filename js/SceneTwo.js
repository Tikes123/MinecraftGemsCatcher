export default class SceneTwo extends Phaser.Scene{
    constructor(){
        // the key for this scene, should be called when there is need to start the scene

        super("SceneTwo");
    }

    preload(){
        // loading the background image asset for this scene

        this.load.image("scenetwo-back", "resources/main_bg.png")
        this.load.image("character", "resources/sknbkt.png")
        this.load.image("drag", "resources/drag.png")
        this.load.image("arrowl", "resources/a_left.png")
        this.load.image("arrowr", "resources/a_right.png")
        
    }

    create(){

        // setting the cameras alpha for this scene, this is because the scene needs to come in with an animation and not just appear randomly
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 1000
        })

        // this adds the already preloaded background image to the scene 
        const image =  this.add.image(160, 240, "scenetwo-back")
        image.setOrigin(0.5,0.5)
        image.setScale(0.82)
        
        this.drag = this.add.image(160,50, "drag");
        this.drag.setScale(0.5)
        this.drag.setOrigin(0.5, 0.3)

               
        // the instruction text on the tutorial scene
        this.moveText = this.add.text(160, 240, "Move the Avatar Left", {fontFamily: "Moul",  fill: "#28a619",})
        this.moveText.setOrigin(0.5, 7)
        this.moveText.setScale(1)
        this.moveText.stroke = "#083434"
        this.moveText.strokeThickness = 18
        this.moveText.setShadow(1, 1, "#083434",2, true, true)

        
        // // the text that shows up after the avatar has moved left
        this.moveText3 = this.add.text(160, 240, "Looking good", {fontFamily: "Moul",  fill: "#28a619",})
        this.moveText3.setOrigin(0.5, 7)
        this.moveText3.setScale(1)
        this.moveText3.stroke = "#083434"
        this.moveText3.strokeThickness = 18
        this.moveText3.setShadow(1, 1, "#083434",2, true, true)
        this.moveText3.visible = false

        // this line adds the avatar and also sets its position and size
        this.character = this.add.image(160,230, "character");
        this.character.setScale(0.65)
        this.character.setOrigin(0.5, 0.3)
        this.cursor = this.input.keyboard.createCursorKeys()
        

        // adding a tween animation to enable the hand indicate the movement of the avatar

        this.tween2 = this.tweens.add({
            targets: this.hand,
            x: 0,
            duration: 2000,
            ease: "Linear",
            repeat: -1,
        })
     
        
    }

   
    update() {
        //  /** @type {Phaser.Physics.Arcade.StaticBody} */

        let leftKey = this.cursor.left.isDown 
        
        // conditional for left movement
        if (leftKey == true) {
            this.character.x -= 3
            
            this.moveText.visible = false
            this.moveText3.visible = true
            
            //limit for the avatar
            if (this.character.x < 15) {
                this.character.setPosition(15, this.character.y)
                
                // reloading the next scene for the other hand movement quickly
                this.time.delayedCall(350, ()=>this.scene.start("Restart"))
                  
            }
        }
       
        }
}
