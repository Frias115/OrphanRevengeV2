
BasicGame.credits = function (game) {

	this.titleTxt = null;
    this.startTxt = null;

};

BasicGame.credits.prototype = {

	create: function () {
		var x = this.game.width / 2
        , y = this.game.height / 2;

      this.menuBg = this.game.add.tileSprite(0, 0, 1024, 768, 'menuBg');
      this.menuBg.fixedToCamera = true;




      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'Codigo: Roberto Frias y Diego Moreno' );
      this.titleTxt.align = 'center';
      this.titleTxt.x = this.game.width / 2 - this.titleTxt.textWidth / 2;

      this.secTxt = this.add.bitmapText(x, y+100, 'minecraftia', 'Animacion: Laura Perez' );
      this.secTxt.align = 'center';
      this.secTxt.x = this.game.width / 2 - this.secTxt.textWidth / 2;

      this.terTxt = this.add.bitmapText(x, y+200, 'minecraftia', 'Escenarios: Ivan Bolufer' );
      this.terTxt.align = 'center';
      this.terTxt.x = this.game.width / 2 - this.terTxt.textWidth / 2;

      this.terTxt = this.add.bitmapText(x, y+300, 'minecraftia', 'Creacion de niveles: Diego Moreno' );
      this.terTxt.align = 'center';
      this.terTxt.x = this.game.width / 2 - this.terTxt.textWidth / 2;


      /*y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', 'START');
      this.startTxt.align = 'center';
      this.startTxt.x = this.game.width / 2 - this.startTxt.textWidth / 2;*/

      this.input.onDown.add(this.onDown, this);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	onDown: function () {
      BasicGame.health = 3;
      this.game.state.start('menu');
    }

};
