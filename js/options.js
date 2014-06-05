
BasicGame.options = function (game) {
	this.titleTxt = null;
 
};

BasicGame.options.prototype = {

	create: function () {
		var x = this.game.width / 2
        , y = this.game.height / 2;

		this.menuBg = this.game.add.tileSprite(0, 0, 1024, 768, 'menuBg');
        this.menuBg.fixedToCamera = true;

        this.titleTxt = this.add.bitmapText(x, y-300, 'minecraftia', 'CONTROLES',40);
        this.titleTxt.tint = '0xB40404'
        this.titleTxt.align = 'center';
        this.titleTxt.x = this.game.width / 2 - this.titleTxt.textWidth / 2;

        this.firstTxt = this.add.bitmapText(x, y-250, 'minecraftia', 'Movimiento: A y D');
        this.firstTxt.tint = '0xB40404'
        this.firstTxt.align = 'center';
        this.firstTxt.x = this.game.width / 2 - this.firstTxt.textWidth / 2;

        this.secTxt = this.add.bitmapText(x, y-200, 'minecraftia', 'Salto(pulsar dos veces para doble salto): W ');
        this.secTxt.tint = '0xB40404'
        this.secTxt.align = 'center';
        this.secTxt.x = this.game.width / 2 - this.secTxt.textWidth / 2;

        this.thirdTxt = this.add.bitmapText(x, y, 'minecraftia', 'Ataque principal: K ');
        this.thirdTxt.tint = '0xB40404'
        this.thirdTxt.align = 'center';
        this.thirdTxt.x = this.game.width / 2 - this.thirdTxt.textWidth / 2;

        this.fourTxt = this.add.bitmapText(x, y+50, 'minecraftia', 'Ataque especial: L ');
        this.fourTxt.tint = '0xB40404'
        this.fourTxt.align = 'center';
        this.fourTxt.x = this.game.width / 2 - this.fourTxt.textWidth / 2;

        this.fiveTxt = this.add.bitmapText(x, y+100, 'minecraftia', 'Menu: P ');
        this.fiveTxt.tint = '0xB40404'
        this.fiveTxt.align = 'center';
        this.fiveTxt.x = this.game.width / 2 - this.fiveTxt.textWidth / 2;

        this.backTxt = this.add.bitmapText(x-200, y-390, 'minecraftia', 'Click anywhere to go back' );
        this.backTxt.align = 'center';
        this.backTxt.tint = '0xB40404'
        this.backTxt.x = this.game.width / 2 - this.backTxt.textWidth / 2;
		
		this.input.onDown.add(this.onDown, this);

	},

	update: function () {

		

	},

	onDown: function () {
      this.game.state.start('menu');
    }

};
