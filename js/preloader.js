
BasicGame.preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(100, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		
		this.load.spritesheet('player', 'assets/player.png', 168, 145); //133,145
	    this.load.spritesheet('crown', 'assets/crown.png', 124, 145);
	    this.load.image('enemy','assets/enemy.png')
		this.load.image('menuBg','assets/menuBg.png')
		this.load.image('startButton','assets/startButton.png')
		this.load.image('optionsButton','assets/optionsButton.png')
		this.load.image('creditsButton','assets/creditsButton.png')
		this.load.tilemap('map1', 'assets/Map3.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.tilemap('map2', 'assets/Map4.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.tilemap('mapBoss1', 'assets/MapBoss1.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.image('ground','assets/ground.png')
		this.load.image('platform','assets/platform.png')
		this.load.image('groundCity','assets/groundCity.png')
		this.load.image('platformCity','assets/platformCity.png')
		this.load.image('background','assets/background.png')
		this.load.audio('bgMusic', 'assets/backgroundMusic.mp3')
		this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml')
		//	+ lots of other required assets here

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the menu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('menu');
		}
		this.state.start('menu');

	}

};
