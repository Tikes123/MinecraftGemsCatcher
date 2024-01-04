export default class PlayGround extends Phaser.Scene{
    constructor(){
        super("PlayGround")
        // variable for the game score
        this.gameScore = "0036";
    }
    preload(){
        // this loads all the images, sprites and spritesheets for this scene
        this.load.image("gameplay", "resources/main_bg.png")
        this.load.image("character3", "resources/skin.png")
        this.load.image("emptyBag", "resources/basket.png")

        this.load.image("robux", "resources/stone2.png")
        this.load.image("gcc", "resources/stone3.png")
        this.load.image("gcl", "resources/gem3.png")
        this.load.image("gcr", "resources/gem2.png")
        this.load.image("greenTrail2", "resources/greenTrail2.png")
        this.load.image("goldTrail", "resources/greenTrail2.png")

        this.load.image("bag", "resources/basket.png")
        this.load.image("yellow", "resources/stone1.png")
        this.load.image("green", "resources/diamonds.png")

        this.load.image("stone", "resources/stone2.png")
        this.load.image("gem", "resources/gem3.png")
        this.load.image("gem0", "resources/diamonds.png")
        this.load.image("gem1", "resources/gem1.png")
        this.load.image("stone1", "resources/stone3.png")

        this.load.image("tbox", "resources/sub.png")
        this.load.image("timer", "resources/time.png")
    }

    create(){
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 10
        })
        

        // these blocks of code adds all the needed sprites and spritesheets to this scene
        const gameplay = this.add.image(160,240, "gameplay")
        gameplay.setOrigin(0.5,0.5)
        gameplay.setScale(0.82)

        
        this.addAvatar = 
        this.avatar = this.add.image(160, 285, "character3",)
        this.avatar.setScale(0.65)
        this.cursor = this.input.keyboard.createCursorKeys()
        
        this.bag = this.add.image(160, 270, "bag",)
        this.bag.setScale(0.60)
        this.physics.add.existing(this.bag)   


        //basket gems
        this.stone1 = this.add.image(173, 222, "stone1",)
        this.stone1.setScale(0.68)
        this.stone1.visible = false
        this.physics.add.existing(this.stone1)

        this.gem0 = this.add.image(168, 228, "gem0",)
        this.gem0.setScale(0.62)
        this.gem0.visible = false
        this.physics.add.existing(this.gem0)

        this.gem1 = this.add.image(158, 228, "gem1",)
        this.gem1.setScale(0.56)
        this.gem1.visible = false
        this.physics.add.existing(this.gem1)

        this.gem = this.add.image(152, 224, "gem",)
        this.gem.setScale(0.66)
        this.gem.visible = false
        this.physics.add.existing(this.gem)

        this.stone = this.add.image(160, 240, "stone")
        this.stone.setScale(0.6)
        this.stone.setOrigin(-3.8, 7.3)


   
        this.text =  this.add.text(54, 37, "16", {fontFamily: "Moul",})
        this.num = this.text.text
        this.text.setVisible(false)
 

        this.robux = this.add.image(160, 240, "robux")
        this.robux.setScale(0.6)
        this.robux.setOrigin(-3.8, 7.3)

        //Timer
        this.tbox = this.add.image(160, 445, "tbox",)
        this.tbox.setScale(0.75)
        this.physics.add.existing(this.tbox) 

        this.timer = this.add.image(60, 445, "timer",)
        this.timer.setScale(0.60)
        this.physics.add.existing(this.timer) 
       
        // adding the coin and its trails to the scene
      
        this.createHep1 = () => {
          this.hepCoin1 = this.add.image(45, 100, "robux")
          this.hepCoin1.setScale(0.7)
          this.physics.add.existing(this.hepCoin1)
        
        
          this.goldTrail = this.add.image(45, 70, "goldTrail")
          this.goldTrail.setScale(0.5)

          this.add.tween({
            targets: [this.hepCoin1,
                this.goldTrail,
            ],
            duration:4000,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
        }

        this.extraHep1 = () => {
          this.hepCoin11 = this.add.image(85, 100, "robux")
          this.hepCoin11.setScale(0.7)
          this.physics.add.existing(this.hepCoin11)
        
        
          this.goldTrail11 = this.add.image(85, 70, "goldTrail")
          this.goldTrail11.setScale(0.5)

          this.add.tween({
            targets: [this.hepCoin11,
                this.goldTrail11,
            ],
            duration:4000,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
        }

        this.createGcl = () => {
          this.gcl = this.add.image(110, 20, "gcl")
          this.gcl.setScale(0.5)
          this.physics.add.existing(this.gcl)
          
          this.greenTrail1 = this.add.image(110, -3, "greenTrail2")
          this.greenTrail1.setScale(0.5)

          this.add.tween({
            targets: [
                this.gcl,
                this.greenTrail1,
            ],
            duration:2000,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
        }

        this.extraGcl = () => {
          this.extragcl = this.add.image(110, 20, "gcl")
          this.extragcl.setScale(0.5)
          this.physics.add.existing(this.extragcl)
          
          this.extragreenTrail1 = this.add.image(110, -3, "greenTrail2")
          this.extragreenTrail1.setScale(0.5)

          this.add.tween({
            targets: [
                this.extragcl,
                this.extragreenTrail1,
            ],
            duration:2000,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
        }
        
         this.createGcc = () => {
             
            this.gcc = this.add.image(270, 80, "gcc")
            this.gcc.setScale(0.5)
            this.physics.add.existing(this.gcc)

            // // also add the green trail for this coin
            this.greenTrail2 = this.add.image(270, 50, "greenTrail2")
            this.greenTrail2.setScale(0.5)
            this.physics.add.existing(this.greenTrail2)

            this.add.tween({
              targets: [
                  this.gcc,
                  this.greenTrail2,
              ],
              duration:3000,
              y: "+=400",
              ease: "Power",
              repeat: -1,
              
            })
         }

         this.extraGcc = () => {
            this.extragcc = this.add.image(240, 80, "gcc")
            this.extragcc.setScale(0.5)
            this.physics.add.existing(this.extragcc)

            // // also add the green trail for this coin
            this.extragreenTrail2 = this.add.image(240, 50, "greenTrail2")
            this.extragreenTrail2.setScale(0.5)
            this.physics.add.existing(this.extragreenTrail2)

              this.add.tween({
                targets: [
                    this.extragcc,
                    this.extragreenTrail2,
                ],
                duration:3000,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              })
         }


         this.createHep2 = () => {
              this.hepCoin2 = this.add.image(200, 90, "robux")
              this.hepCoin2.setScale(0.7)
              this.physics.add.existing(this.hepCoin2)
              
      
              this.goldTrail2 = this.add.image(200, 60, "goldTrail")
              this.goldTrail2.setScale(0.5)

              this.add.tween({
                targets: [
                    this.hepCoin2,
                    this.goldTrail2,
                ],
                duration:2500,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              })
         }

         this.extraHep2 = () => {
              this.extrahepCoin2 = this.add.image(230, 90, "robux")
              this.extrahepCoin2.setScale(0.7)
              this.physics.add.existing(this.extrahepCoin2)
              
      
              this.extragoldTrail2 = this.add.image(230, 60, "goldTrail")
              this.extragoldTrail2.setScale(0.5)

              this.add.tween({
                targets: [
                    this.extrahepCoin2,
                    this.extragoldTrail2,
                ],
                duration:2500,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              })
         }

         this.createGcc2 = () => {
          this.gcc2 = this.add.image(145, 120, "gcc")
          this.gcc2.setScale(0.5)
          this.physics.add.existing(this.gcc2)
        
          this.greenTrail3 = this.add.image(145, 90, "greenTrail2")
          this.greenTrail3.setScale(0.5)

          this.add.tween({
            targets: [
                this.gcc2,
                this.greenTrail3,
            ],
            duration:3500,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
  
         }

         this.extraGcc2 = () => {
          this.extragcc2 = this.add.image(145, 120, "gcc")
          this.extragcc2.setScale(0.5)
          this.physics.add.existing(this.extragcc2)
          
  
          this.extragreenTrail3 = this.add.image(145, 90, "greenTrail2")
          this.extragreenTrail3.setScale(0.5)

          this.add.tween({
            targets: [
                this.extragcc2,
                this.extragreenTrail3,
            ],
            duration:3500,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
         }

         this.createGcr = () => {
              this.gcr = this.add.image(250, 140, "gcr")
              this.gcr.setScale(0.4)
              this.physics.add.existing(this.gcr)
      
              this.greenTrail4 =  this.add.image(250, 120, "greenTrail2")
              this.greenTrail4.setScale(0.4)

              this.add.tween({
                targets: [
                    this.gcr,
                    this.greenTrail4,
                ],
                duration:3000,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              })
         }

         this.extraGcr = () => {
              this.extragcr = this.add.image(210, 140, "gcr")
              this.extragcr.setScale(0.4)
              this.physics.add.existing(this.extragcr)
      
              this.extragreenTrail4 =  this.add.image(210, 120, "greenTrail2")
              this.extragreenTrail4.setScale(0.4)

              this.add.tween({
                targets: [
                    this.extragcr,
                    this.extragreenTrail4,
                ],
                duration:3000,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              })
         }

         this.createGcl2 = () => {
              this.gcl2 = this.add.image(100, 200, "gcl")
              this.gcl2.setScale(0.5)
              this.physics.add.existing(this.gcl2)
      
              this.greenTrail5 = this.add.image(100, 180, "greenTrail2")
              this.greenTrail5.setScale(0.4)

              this.add.tween({
                targets: [
                    this.gcl2,
                    this.greenTrail5,
                ],
                duration:2700,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              })
         }

      
         this.createhep3 = () =>{
          this.hepCoin3 = this.add.image(190, 10, "robux")
          this.hepCoin3.setScale(0.7)
          this.physics.add.existing(this.hepCoin3)
  
          this.goldTrail3 = this.add.image(128, 39, "goldTrail")
          this.goldTrail3.setScale(0.4)
          this.goldTrail3.setOrigin(-2.5, 1.5)

          this.add.tween({
            targets: [
                this.hepCoin3,
                this.goldTrail3

            ],
            duration:1500,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })

         }

         this.extraHep3 = () => {
            this.extrahepCoin3 = this.add.image(190, 10, "robux")
            this.extrahepCoin3.setScale(0.7)
            this.physics.add.existing(this.extrahepCoin3)
  
            this.extragoldTrail3 = this.add.image(128, 39, "goldTrail")
            this.extragoldTrail3.setScale(0.4)
            this.extragoldTrail3.setOrigin(-2.5, 1.5)

            this.add.tween({
            targets: [
                this.extrahepCoin3,
                this.extragoldTrail3
            ],
            duration:1500,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
          })
         }

         this.Green1 = () =>{
            
            this.addGreen1 =  this.add.image(140, 130, "gcc")
            this.addGreen1.setScale(0.5)
            this.physics.add.existing(this.addGreen1)
            // this.addGreen1.alpha = 0
            this.addGreenTrail1 = this.add.image(140, 100, "greenTrail2")
            this.addGreenTrail1.setScale(0.5)
            // this.addGreenTrail1.alpha = 0

            this.tweens.add({
              targets: [
                this.addGreen1,
                this.addGreenTrail1
              ],
              duration: 2000,
              y: "+=400",
              ease: "Power",
              repeat: -1,
              
              alpha: 1,
            })
    
         }

         this.extraGreen1 = () => {
          this.extraaddGreen1 =  this.add.image(100, 130, "gcc")
          this.extraaddGreen1.setScale(0.5)
          this.physics.add.existing(this.extraaddGreen1)
          // this.extraaddGreen1.alpha = 0
          this.extraaddGreenTrail1 = this.add.image(100, 100, "greenTrail2")
          this.extraaddGreenTrail1.setScale(0.5)
          // this.extraaddGreenTrail1.alpha = 0

          this.tweens.add({
            targets: [
              this.extraaddGreen1,
              this.extraaddGreenTrail1
            ],
            duration: 2000,
            y: "+=400",
            ease: "Power",
            repeat: -1,
            
            alpha: 1,
          })
         }

         this.Green2 = () => {
              this.addGreen2 =  this.add.image(150, 50, "gcl")
              this.addGreen2.setScale(0.5)
              this.physics.add.existing(this.addGreen2)
              // this.addGreen2.alpha = 0
              this.addGreenTrail2 = this.add.image(150, 20, "greenTrail2")
              this.addGreenTrail2.setScale(0.5)
              // this.addGreenTrail2.alpha = 0

              this.tweens.add({
                targets: [
                  this.addGreen2,
                  this.addGreenTrail2
                ],
                duration: 3000,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
               alpha: 1
              })
         }

         this.extraGreen2 = () => {
              this.extraaddGreen2 =  this.add.image(110, 50, "gcl")
              this.extraaddGreen2.setScale(0.5)
              this.physics.add.existing(this.extraaddGreen2)
              // this.addGreen2.alpha = 0
              this.extraaddGreenTrail2 = this.add.image(110, 20, "greenTrail2")
              this.extraaddGreenTrail2.setScale(0.5)
              // this.addGreenTrail2.alpha = 0

              this.tweens.add({
                targets: [
                  this.extraaddGreen2,
                  this.extraaddGreenTrail2
                ],
                duration: 3000,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
              alpha: 1
              })
         }

         this.Green3 = () => {
              this.addGreen3 =  this.add.image(270, 0, "gcr")
              this.addGreen3.setScale(0.4)
              this.physics.add.existing(this.addGreen3)
              // this.addGreen3.alpha = 0
              this.addGreenTrail3 = this.add.image(270, -20, "greenTrail2")
              this.addGreenTrail3.setScale(0.3)
              // this.addGreenTrail3.alpha = 0

              
                this.tweens.add({
                  targets: [
                    this.addGreen3,
                    this.addGreenTrail3
                  ],
                  duration: 2000,
                  y: "+=400",
                  ease: "Power",
                  repeat: -1,
                  
                  alpha: 1,
                })
         }

         this.extraGreen3 = () =>{
          this.extraaddGreen3 =  this.add.image(215, 0, "gcr")
          this.extraaddGreen3.setScale(0.4)
          this.physics.add.existing(this.extraaddGreen3)
          // this.extraaddGreen3.alpha = 0
          this.extraaddGreenTrail3 = this.add.image(215, -20, "greenTrail2")
          this.extraaddGreenTrail3.setScale(0.5)
          // this.extraaddGreenTrail3.alpha = 0

          
            this.tweens.add({
              targets: [
                this.extraaddGreen3,
                this.extraaddGreenTrail3
              ],
              duration: 2000,
              y: "+=400",
              ease: "Power",
              repeat: -1,
              
              alpha: 1,
            })
         }

         this.Gold1 = () => {
              this.addGold1 =  this.add.image(60, 50, "robux")
              this.addGold1.setScale(0.7)
              this.physics.add.existing(this.addGold1)
              // this.addGold1.alpha = 0
              this.addGoldTrail1 = this.add.image(60, 20, "goldTrail")
              this.addGoldTrail1.setScale(0.5)
              // this.addGoldTrail1.alpha = 0

              this.tweens.add({
                targets: [
                  this.addGold1,
                  this.addGoldTrail1
                ],
                duration: 2000,
                y: "+=400",
                ease: "Power",
                repeat: -1,
                
                alpha: 1
              })
         }

         this.extraGold1 = () => {
            this.extraaddGold1 =  this.add.image(160, 50, "robux")
            this.extraaddGold1.setScale(0.7)
            this.physics.add.existing(this.extraaddGold1)
            this.extraaddGoldTrail1 = this.add.image(160, 20, "goldTrail")
            this.extraaddGoldTrail1.setScale(0.5)

            this.tweens.add({
              targets: [
                this.extraaddGold1,
                this.extraaddGoldTrail1
              ],
              duration: 2000,
              y: "+=400",
              ease: "Power",
              repeat: -1,
              
              alpha: 1
            })
         }

      
          // this function updates the text defining the time in this game reducing it by one

          this.updatedTime = () =>{
            // this pulls the class wide variable this.num which holds the string that is assigned to
            // the time in the game and converts it into a number 
            this.newNum = Number(this.num)

            // this reduces the converted variable by one
            var newNum2 = this.newNum-=1
            //this assigns the reduced value to the class variable this.num making it a number
            this.num = newNum2
            if (this.num === 15) {
              this.createHep1()
              this.createGcc()
              this.createGcc2()
              this.createGcl()
              this.createGcl2()
              this.createHep2()    //if the game lags again check this method
              this.createGcr()
              this.createhep3()
              this.Green1()
              this.Green2()
              this.Green3()
              this.Gold1()

                this.gem.visible = false
                this.gem0.visible = false
                this.gem1.visible = false
                this.stone.visible = false
                this.stone1.visible = false
            }

            if(this.num === 13){
            }
            //this updates the time text in the game
            this.text.setText(`${this.num}`, {fontFamily: "Moul"})
  
              if (this.num <= 0) {
                this.time.delayedCall(15, ()=>this.scene.start("Collected"))
                setTimeout(()=>{
                  clearInterval(intervalId)
                })
              }
           
          }

          
          
          // this calls the function that reduces the time by one every one second
          let intervalId = setInterval(this.updatedTime, 1000)


          this.extraHep1Overlap = () => {
            this.hepCoin11.destroy()
            this.goldTrail11.destroy()
              this.time.delayedCall(1000, ()=>{
                this.createHep1()
              })
          }

          this.gccOverlap = () =>{
            this.gcc.destroy()
            this.greenTrail2.destroy()
            this.stone1.visible = true
            this.time.delayedCall(100, ()=>{
              this.extraGcc()
            })
          }

          this.extraGccOverlap = () => {
            this.extragcc.destroy()
            this.extragreenTrail2.destroy()
            this.time.delayedCall(1000, ()=>{
              this.createGcc()
            })
          }

          this.hepCoin1Overlap = () => {
              this.hepCoin1.destroy()
              this.goldTrail.destroy()
              this.gem.visible = true
  
            this.time.delayedCall(1000, ()=>{
              this.extraHep1()

            })
          }

          this.gclOverlap = () => {
            this.gcl.destroy()
            this.greenTrail1.destroy() 
            this.gem0.visible = true
        
            this.time.delayedCall(100, ()=>{
                this.extraGcl()
            })
          }

          this.extraGclOverlap = () => {
            this.extragcl.destroy()
            this.extragreenTrail1.destroy()
              this.time.delayedCall(1000, ()=>{
                this.createGcl()
              })    
          }
          this.hepCoin2Overlap = () => {
            this.hepCoin2.destroy()
            this.goldTrail2.destroy()
            this.stone.visible = true
            this.time.delayedCall(100, ()=>{
             this.extraHep2()
            })
          }

          this.extraHep2Overlap = () =>{
            this.extraHep2.destroy()
            this.extragoldTrail2.destroy()
            this.time.delayedCall(1000, ()=>{
              this.createHep2()
            })
          }
          this.gcc2Overlap = () => {
            this.stone1.visible = true
            this.gcc2.destroy()
            this.greenTrail3.destroy()
  
            this.time.delayedCall(1500, ()=>{
              this.extraGcc2()
            })
          }

          this.extraGcc2Overlap = () => {
            this.extragcc2.destroy()
            this.extragreenTrail3.destroy()
            this.time.delayedCall(1000, ()=>{
              this.createGcc2()
            })
          }

          this.gcrOverlap = () => {
            this.gem0.visible = true
            this.gcr.destroy()
            this.greenTrail4.destroy()
  
            this.time.delayedCall(2500, ()=>{
              this.extraGcr()
              
            })
          }

          this.extraGcrOverlap = () =>{
            this.extragcr.destroy()
            this.extragreenTrail4.destroy()
            this.time.delayedCall(1000, ()=>{
              this.createGcr()
            })
          }

          this.hepCoin3Overlap = () => {
            this.stone.visible = true
            this.hepCoin3.destroy()
            this.goldTrail3.destroy()
  
            this.time.delayedCall(3500, ()=>{
             this.createhep3()
            })
          }

          this.extrahepCoin3Overlap = () =>{
            this.extrahepCoin3.destroy()
            this.extragoldTrail3.destroy()
            this.time.delayedCall(1000, ()=>{
              this.createhep3()
            })
          }

          this.addGreen1Overlap = () => {
            this.addGreen1.destroy()
            this.addGreenTrail1.destroy()
          
            this.time.delayedCall(300, ()=>{
              this.extraGreen1()
          })
          }
          
          this.extraaddGreen1Overlap = () => {
            this.extraaddGreen1.destroy()
            this.extraaddGreenTrail1.destroy()
            this.time.delayedCall(1000, ()=>{
              this.Green1()
            })
          }
          this.addGreen2Overlap = () => {
            this.addGreen2.destroy()
            this.addGreenTrail2.destroy()
            
            this.gem1.visible = true
            this.time.delayedCall(1500, ()=>{
              this.extraGreen2()
            })
          }

          this.extraGreen2Overlap = () => {
            this.extraaddGreen2.destroy()
            this.extraaddGreenTrail2.destroy()
            this.time.delayedCall(1000, ()=>{
              this.Green2()
            })
          }
          this.addGreen3Overlap = () => {
            this.addGreen3.destroy()
            this.addGreenTrail3.destroy()
          
            this.time.delayedCall(3500, ()=>{
              this.extraGreen3()
          })
          }

          this.extraGreen3Overlap = () =>{
            this.extraaddGreen3.destroy()
            this.extraaddGreenTrail3.destroy()
            this.time.delayedCall(500, ()=>{
              this.Green3()
            })
          }

          this.addGold1Overlap = () => {
            this.addGold1.destroy()
            this.addGoldTrail1.destroy()

            this.time.delayedCall(300, ()=>{
              this.Gold1()
          })
          }

          this.extraGold1Overlap = () =>{
            this.extraaddGold1.destroy()
            this.extraaddGoldTrail1.destroy()
            this.time.delayedCall(100, ()=>{
              this.Gold1()
            })
          }
    }
          
    update(){
      // this line defines the movement left and right of the avatar
      let left = this.cursor.left.isDown;
      let right = this.cursor.right.isDown;
      
      
      // these lines of codes defines the actions of the avatar when it moves towards its left
      if(left){
        // this moves the avatar and all assets related to it towards the left
        this.avatar.x -= 3;
        this.bag.x -=3;
        this.gem0.x -= 3;
        this.gem.x -= 3;
        this.gem1.x -= 3;
        this.stone.x -= 3;
        this.stone1.x -= 3;
        
        
       // these lines define the collision detection functions and actions within the game when a collision with any of
       // the coin is detected by the avatar while moving towards its left
        this.physics.add.overlap(this.bag, this.gcc, this.gccOverlap)
        this.physics.add.overlap(this.bag, this.hepCoin1, this.hepCoin1Overlap)
        this.physics.add.overlap(this.bag, this.gcl, this.gclOverlap)
        this.physics.add.overlap(this.bag, this.hepCoin2, this.hepCoin2Overlap)
        this.physics.add.overlap(this.bag, this.gcc2, this.gcc2Overlap)
        this.physics.add.overlap(this.bag, this.gcl, this.gclOverlap)
        this.physics.add.overlap(this.bag, this.gcr, this.gcrOverlap)
        this.physics.add.overlap(this.bag, this.hepCoin3, this.hepCoin3Overlap)
        this.physics.add.overlap(this.bag, this.addGreen1, this.addGreen1Overlap)
        this.physics.add.overlap(this.bag, this.addGreen2, this.addGreen2Overlap)
        this.physics.add.overlap(this.bag, this.addGreen3, this.addGreen3Overlap)
        this.physics.add.overlap(this.bag, this.addGold1, this.addGold1Overlap)
        this.physics.add.overlap(this.bag, this.hepCoin11, this.extraHep1Overlap)
        this.physics.add.overlap(this.bag, this.extragcl, this.extraGclOverlap)
        this.physics.add.overlap(this.bag, this.extragcc, this.extraGccOverlap)
        this.physics.add.overlap(this.bag, this.extrahep2, this.extraHep2Overlap)
        this.physics.add.overlap(this.bag, this.extragcc2, this.extraGcc2Overlap)
        this.physics.add.overlap(this.bag, this.extragcr, this.extraGcrOverlap)
        this.physics.add.overlap(this.bag, this.extrahepCoin3, this.extrahepCoin3Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGreen1, this.extraaddGreen1Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGreen2, this.extraGreen2Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGreen3, this.extraGreen3Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGold1,  this.extraGold1Overlap)
        // this defines the movement boundary for the avatar while moving towards its left
        if (this.avatar.x < 10) {
          
          this.avatar.x = 12;
          this.bag.x = 12;
          this.gem0.x =12;
          this.gem.x =12;
          this.gem1.x =12;
          this.stone.x =12;
          this.stone1.x =12;

          }
        
      }


      // this defines all the actions and movements within the gameplay while the avatar is moving towards its right

      else if (right){
        // this defines the position of all assets related to the avatar while it moves towards the right
        this.avatar.x += 3;
        this.bag.x +=3;

        this.gem0.x += 3;
        this.gem.x += 3;
        this.gem1.x += 3;
        this.stone.x += 3;
        this.stone1.x += 3;
       
        this.physics.add.overlap(this.bag, this.gcc, this.gccOverlap)
        this.physics.add.overlap(this.bag, this.hepCoin1, this.hepCoin1Overlap)
        this.physics.add.overlap(this.bag, this.gcl, this.gclOverlap)
        this.physics.add.overlap(this.bag, this.hepCoin2, this.hepCoin2Overlap)
        this.physics.add.overlap(this.bag, this.gcc2, this.gcc2Overlap)
        this.physics.add.overlap(this.bag, this.gcl, this.gclOverlap)
        this.physics.add.overlap(this.bag, this.gcr, this.gcrOverlap)
        this.physics.add.overlap(this.bag, this.hepCoin3, this.hepCoin3Overlap)
        this.physics.add.overlap(this.bag, this.addGreen1, this.addGreen1Overlap)
        this.physics.add.overlap(this.bag, this.addGreen2, this.addGreen2Overlap)
        this.physics.add.overlap(this.bag, this.addGreen3, this.addGreen3Overlap)
        this.physics.add.overlap(this.bag, this.addGold1, this.addGold1Overlap)
        this.physics.add.overlap(this.bag, this.hepCoin11, this.extraHep1Overlap)
        this.physics.add.overlap(this.bag, this.extragcl, this.extraGclOverlap)
        this.physics.add.overlap(this.bag, this.extragcc, this.extraGccOverlap)
        this.physics.add.overlap(this.bag, this.extrahep2, this.extraHep2Overlap)
        this.physics.add.overlap(this.bag, this.extragcc2, this.extraGcc2Overlap)
        this.physics.add.overlap(this.bag, this.extragcr, this.extraGcrOverlap)
        this.physics.add.overlap(this.bag, this.extrahepCoin3, this.extrahepCoin3Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGreen1, this.extraaddGreen1Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGreen2, this.extraGreen2Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGreen3, this.extraGreen3Overlap)
        this.physics.add.overlap(this.bag, this.extraaddGold1,  this.extraGold1Overlap)
      }
  



          if (this.avatar.x > 305) {
            this.avatar.x = 305
            this.bag.x = 310
            
            this.gem0.x = 305;
            this.gem.x = 305;
            this.gem1.x = 305;
            this.stone.x = 305;
            this.stone1.x = 305;
          }
        
        }
       
      }

     
     
    
