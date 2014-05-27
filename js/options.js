
BasicGame.options = function (game) {

	

};

BasicGame.options.prototype = {

	create: function () {

		this.menuBg = this.game.add.tileSprite(0, 0, 1024, 768, 'menuBg');
        this.menuBg.fixedToCamera = true;
		
		this.input.onDown.add(this.onDown, this);

	},

	update: function () {

		

	},

	onDown: function () {
      BasicGame.health = 3;
      this.game.state.start('menu');
    }

};
