class EndingOne extends Phaser.Scene{
    constructor(){
            super('EndingOneScene');
    }
    preload(){
        this.load.image('endingOne','./assets/ScreenUI/escapeText2.png');
    }
    create(){                                                                       
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.endingOne = this.add.tileSprite(0,0,896,512,'endingOne').setOrigin(0,0);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('creditScene');
        }
    }
  }    