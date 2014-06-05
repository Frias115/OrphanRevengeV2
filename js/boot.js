var BasicGame = {
    //Variables globales
    health: 5,
    healthBoss: 3,
    playerVel: 200,
    musicPlaying: false,
    gameMusic: 0,
    nextMap: 'game'
};

BasicGame.boot = function (game) {

};

BasicGame.boot.prototype = {

    preload: function () {

        this.load.image('preloaderBackground', 'assets/loading.jpg');
        this.load.image('preloaderBar', 'assets/bar.png');

    },

    create: function () {

        this.input.maxPointers = 1;

        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 480;
            this.scale.minHeight = 260;
            this.scale.maxWidth = 1024;
            this.scale.maxHeight = 768;
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
            this.scale.setScreenSize(true);
        }

        this.state.start('preloader');

    }

};
