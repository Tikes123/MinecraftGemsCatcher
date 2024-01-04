export default class Restart extends Phaser.Scene{
    constructor(){
        super("Restart")
    }

    preload(){
        this.load.image("back", "resources/main_bg.png")
        this.load.image("skin", "resources/sknbkt.png")
        this.load.image("drag", "resources/drag.png")
        this.load.image("arrowl", "resources/a_left.png")
        this.load.image("arrowr", "resources/a_right.png")
    }

    create(){
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 1000
        })
        // setting the background image for the scene
        const back = this.add.image(160, 240, "scenetwo-back")
        back.setOrigin(0.5,0.5)
        back.setScale(0.82)

        // adding and styling the texts for this scene

        this.drag = this.add.image(160,50, "drag");
        this.drag.setScale(0.5)
        this.drag.setOrigin(0.5, 0.3)


        this.moveText1 = this.add.text(160, 240, "Now Move Right", {fontFamily: "Moul",  fill: "#28a619",})
        this.moveText1.setOrigin(0.5, 7)
        this.moveText1.setScale(1)
        this.moveText1.stroke = "#083434"
        this.moveText1.strokeThickness = 18
        this.moveText1.setShadow(1, 1, "#083434",2, true, true)

        this.moveText2 = this.add.text(160, 240, "Excellent", {fontFamily: "Moul",  fill: "#28a619",})
        this.moveText2.setOrigin(0.5, 7)
        this.moveText2.setScale(1)
        this.moveText2.stroke = "#083434"
        this.moveText2.strokeThickness = 18
        this.moveText2.setShadow(1, 1, "#083434",2, true, true)
        this.moveText2.visible = false


        //adding all the sprites/images for this scene

        this.skin = this.add.image(160, 230, "skin", true)
        this.skin.setScale(0.65)
        this.skin.setOrigin(0.5, 0.3)
        this.cursor = this.input.keyboard.createCursorKeys()

    }

    update(){
        // setting the right key movement ((remember to add the drag function as well))
        let rightKey = this.cursor.right.isDown
        if (rightKey == true) {
            this.skin.x += 3
           
            //limiting the movement of the avatar
            if (this.skin.x > 305.40000000000006) {
                this.skin.setPosition(305.40000000000006, this.skin.y)
                this.moveText1.visible = false
                this.moveText2.visible = true
                this.time.delayedCall(350, ()=>this.scene.start("PlayGround"))
            }
        }
    
    
}

}