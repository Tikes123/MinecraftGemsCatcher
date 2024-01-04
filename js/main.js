import BackgroundScene from "./BackgroundScene.js"
import SceneTwo from "./SceneTwo.js"
import SceneThree from "./SceneThree.js"
import PlayGround from "./PlayGround.js"
import Restart from "./RestartedScene.js"
import Collected from "./Collected.js"
import FinalScene from "./FinalScene.js"


// declaring the configuration of the game
const config = {
    width: 320,
    height: 480,
    type: "matter",
    backgroundColor: "#333333",
    parent: "minecraft",
    antialias: true,
    scene: [
        BackgroundScene,
        SceneTwo,
        Restart,
        SceneThree,
        PlayGround,
        Collected, 
        FinalScene,
    ],
    scale: {
        zoom: 1,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y:0,
                x:0,
            }
        }
    }
}


// creating an instance of the phaser game
const game = new Phaser.Game(config)
