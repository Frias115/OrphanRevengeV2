
BasicGame.preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.preloader.prototype = {

	preload: function () {

		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(100, 400, 'preloaderBar');


		this.load.setPreloadSprite(this.preloadBar);

		
		this.load.audio('menuMusic', 'assets/menuMusic.mp3')
		this.load.spritesheet('player', 'assets/player.png', 168, 145); //133,145
	    this.load.spritesheet('crown', 'assets/crown.png', 124, 145);
	    this.load.image('enemy','assets/enemy.png')
	    this.load.image('bullet','assets/bullet.jpg')
	    this.load.image('bulletHunter','assets/bulletHunter.jpg')
	    this.load.image('wave','assets/wave.jpg')
		this.load.image('menuBg','assets/menuBg.png')
		this.load.image('startButton','assets/startButton.png')
		this.load.image('optionsButton','assets/optionsButton.png')
		this.load.image('creditsButton','assets/creditsButton.png')
		this.load.tilemap('map1', 'assets/Map3.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.tilemap('map2', 'assets/Map4.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.tilemap('mapBoss1', 'assets/MapBoss1.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.tilemap('mapBoss2', 'assets/MapBoss2.json', null, Phaser.Tilemap.TILED_JSON)
		this.load.image('ground','assets/ground.png')
		this.load.image('platform','assets/platform.png')
		this.load.image('groundCity','assets/groundCity.png')
		this.load.image('platformCity','assets/platformCity.png')
		this.load.image('background','assets/background.png')
		this.load.audio('bgMusic', 'assets/backgroundMusic.mp3')
		this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml')


	},

	create: function () {

		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		if (this.cache.isSoundDecoded('menuMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('menu');
		}

	}

};
