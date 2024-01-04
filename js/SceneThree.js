export default class SceneThree extends Phaser.Scene {
    constructor(){
        super("SceneThree")
    }
    preload(){
        // this load all images, sprites and spritesheets

        this.load.image("back3", "resources/main_bg.png")
        this.load.image("avatar", "resources/sknbkt.png")
        this.load.image("button", "resources/main_bg.png")
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

        // these blocks of code adds all the necessary sprites and images to our scene and also sets its size and position

        const back3 = this.add.image(160, 240, "back3")
        back3.setScale(1)

        const avatar = this.add.image(160, 240, "avatar")
        avatar.setScale(1)
        avatar.setOrigin(0.5, 0.4)

        this.button = this.add.image(160, 240, "button")
        this.button.setScale(0.7)
        this.button.setOrigin(0.5, -3.111)

        // this is the button, it needs to listen for a click event to fire on the nextScene i.e the game play scene, currently this doesnt work
        this.button.setInteractive({useHandCursor: true});
        this.button.on("pointerdown", ()=>{
            this.scene.start("PlayGround")
        })
       
        

        // adding the texts for this scene 
        const text =  this.add.text(160, 240, "Collect As Much Robuxs", {fontFamily: "Moul",  fill: "#C759F6", } )
        text.setOrigin(0.5, 8)
        text.setScale(1.2)
        text.stroke = "#FFFFFF"
        text.strokeThickness = 16
        text.setShadow(1, 1, "#FFFFFF",1, true, true)

        const text2 =  this.add.text(160, 240, "As You Can", {fontFamily: "Moul",  fill: "#C759F6", } )
        text2.setOrigin(0.5, 6.5)
        text2.setScale(1.2)
        text2.stroke = "#FFFFFF"
        text2.strokeThickness = 16
        text2.setShadow(1, 1, "#FFFFFF",1, true, true)


        //adding the coin images for the scene
        const hepCoin = this.add.image(160, 240, "hepCoin")
        hepCoin.setScale(0.5)
        hepCoin.setOrigin(-3, -4)

        const gcr = this.add.image(160, 240, "gcr")
        gcr.setScale(0.8)
        gcr.setOrigin(-0.5, -1.3)
    }

    
}