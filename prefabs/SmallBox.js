class SmallBox extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        //setting up Player Class
        let custom_body = new Phaser.Physics.Arcade.Body(scene.physics.world, this)     //https://phaser.discourse.group/t/character-class/4184/4
        this.body = custom_body;                                                                                                   
        //this.setBounce(0);                                                    //bounce when hitting other object    
        //this.setImmovable();                                                    //cannot be pushed by other objects
        //this.setFrictionX(100000);
        //this.setFrictionStatic(100000);
        //this.body.setAccelerationX(-10);
        this.body.setDragX(100000);
        this.destroyed = false;                                                 //variables for player state
        this.setCollideWorldBounds(true);                                       //bound by game window
        scene.add.existing(this);                                               //add to current scene
        scene.physics.add.existing(this);                                       //add object to existing scene
        
    }
    update(){
      
    }   
}