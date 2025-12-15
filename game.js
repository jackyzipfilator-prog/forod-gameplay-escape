// A minimal Phaser game setup in game.js

var config = {
    type: Phaser.AUTO, // Use WebGL or Canvas
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player; // Variable to hold our player sprite

function preload ()
{
    // Load game assets here (images, sounds)
    // Example: this.load.image('sky', 'assets/sky.png');
}

function create ()
{
    // Add things to the game world when it starts
    // Example: this.add.image(400, 300, 'sky');
    this.add.text(100, 100, 'Hello Game World!', { fontSize: '32px', fill: '#FFF' });
    
    // Set up keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    // This runs every frame and contains the main game logic (movement, checks, etc.)
    
    // Example of player movement logic (if a player object was created)
    // if (this.cursors.left.isDown) { player.setVelocityX(-160); }
    // else if (this.cursors.right.isDown) { player.setVelocityX(160); }
}