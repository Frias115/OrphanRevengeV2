
BasicGame.nextMap = function (game) {

	this.titleTxt = null;
};

BasicGame.nextMap.prototype = {

	create: function () {

	},

	update: function () {

      if (BasicGame.nextMap === 'gameBoss1'){
            this.game.state.start('gameBoss1');
      }
      else if (BasicGame.nextMap === 'gameCity'){
            this.game.state.start('gameCity');
      } 
      else if (BasicGame.nextMap === 'gameBoss2'){
            this.game.state.start('gameBoss2');
      }

	},

};
