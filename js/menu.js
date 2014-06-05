
BasicGame.menu = function (game) {

	this.titleTxt = null;
};

BasicGame.menu.prototype = {

	create: function () {

		var x = this.game.width / 2
        , y = this.game.height / 2;

      if (BasicGame.musicPlaying === false){
      this.menuMusic = this.add.audio('menuMusic')
      this.menuMusic.play('',0,0.3,true)
      BasicGame.musicPlaying = true
      }

      BasicGame.gameMusic = this.add.audio('bgMusic')

      this.menuBg = this.game.add.tileSprite(0, 0, 1024, 768, 'menuBg');
      this.menuBg.fixedToCamera = true;

      this.startButton = this.add.button(200, 370, 'startButton', function(){BasicGame.health = 5 ;BasicGame.healthBoss = 3; this.state.start('game');this.menuMusic.pause();}, this);
    
      this.optionsButton = this.add.button(200, 470, 'optionsButton', function(){this.game.state.start('options');}, this);

      this.creditsButton = this.add.button(200, 570, 'creditsButton', function(){this.game.state.start('credits');}, this);

	},

	update: function () {


	},

};
