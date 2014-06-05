
BasicGame.menu = function (game) {

	this.titleTxt = null;
    this.startTxt = null;

};

BasicGame.menu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
		var x = this.game.width / 2
        , y = this.game.height / 2;

      this.menuBg = this.game.add.tileSprite(0, 0, 1024, 768, 'menuBg');
      this.menuBg.fixedToCamera = true;

      this.startButton = this.add.button(200, 370, 'startButton', function(){BasicGame.health = 5 ;BasicGame.healthBoss = 3; this.state.start('game');}, this);
    
      this.optionsButton = this.add.button(200, 470, 'optionsButton', function(){this.game.state.start('options');}, this);

      this.creditsButton = this.add.button(200, 570, 'creditsButton', function(){this.game.state.start('credits');}, this);



      /*this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'Example Game' );
      this.titleTxt.align = 'center';
      this.titleTxt.x = this.game.width / 2 - this.titleTxt.textWidth / 2;

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', 'START');
      this.startTxt.align = 'center';
      this.startTxt.x = this.game.width / 2 - this.startTxt.textWidth / 2;*/

      //this.input.onDown.add(this.onDown, this);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

};
