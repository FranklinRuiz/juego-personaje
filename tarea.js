var juego = new Phaser.Game(950, 800, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var flappy;
var teclaDrecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var persona;

var estadoPrincipal = {
    preload: function () {
        juego.load.image('fondo', 'img/paisa.jpg');
        juego.load.spritesheet('pajaros', 'img/condor.png', 260, 377);
    },

    create: function () {
        fondoJuego = juego.add.tileSprite(0, 0, 950, 800, 'fondo');
        flappy = juego.add.sprite(juego.width / 2, juego.height / 2, 'pajaros');
        flappy.frame = 1;
        flappy.animations.add('vuelo', [0, 1, 2, 3], 10, true);


        teclaDrecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);


    },

    update: function () {
        fondoJuego.tilePosition.x -= 1;
        flappy.animations.play('vuelo');

        if (teclaDrecha.isDown) {
            flappy.x++;
        } else if (teclaIzquierda.isDown) {
            flappy.x--;
        } else if (teclaArriba.isDown) {
            flappy.y--;
        } else if (teclaAbajo.isDown) {
            flappy.y++;
        }
    }
}


juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
