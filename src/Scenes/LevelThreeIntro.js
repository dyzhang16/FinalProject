class LevelThreeIntro extends Phaser.Scene{
    constructor(){
            super('levelThreeIntroScene');
    }

    preload(){
        this.load.image('level3Load','./assets/ScreenUI/level3Intro.png');
        this.load.tilemapTiledJSON('map3','./assets/TileMaps/level3.json');
        this.load.image('level3Background', './assets/Backgrounds/level3Background.png');
        this.load.spritesheet('level3Hint', './assets/Hints/level3Hints.png',{frameWidth: 512, frameHeight: 960,startFrame: 0, endFrame: 3}); 
      }
    create(){
        //reset variables used in level 3
        drugsTaken = 0;
        buttonPressed1 = false;
        seconds = 0;
        currentScale = 1;
        game.scale.resize(896,512); //rescale in case of reset level 
        this.levelThreeIntro = this.add.tileSprite(0,0,896,512,'level3Load').setOrigin(0,0);
        this.Timer = this.time.addEvent({                         
          delay: 1000,                                                    //calls on LoadingTime() function every second
          callback: this.LoadingTime,
          callbackScope: this,
          loop: true
      });
      }
    update(){ 
      if(seconds > 3){
        this.scene.start('levelThreeScene');                                                          
      }
      console.log(seconds);
    }
    LoadingTime(){
      seconds++;
    } 
}