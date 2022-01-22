var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var flappy;
var teclaDrecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var persona;

var estadoPrincipal = {
    preload: function () {
        //juego.load.image('fondo', 'img/bg.jpeg');
        juego.load.image('fondo', 'img/fondo.png');
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 43, 30);
        //juego.load.spritesheet('personas', 'img/persona.png', 64, 64);
        juego.load.spritesheet('personas', 'img/sprite-sheet.png', 60, 60);
    },

    create: function () {
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
        // flappy = juego.add.sprite(juego.width / 2, juego.height / 2, 'pajaros');
        // flappy.frame = 1;
        // flappy.animations.add('vuelo', [0, 1, 2], 10, true);

        persona = juego.add.sprite(juego.width / 2, juego.height / 2, 'personas');
        persona.anchor.setTo(0.5);
        persona.animations.add('arriba', [0, 1, 2,3,4,5,6,7,8], 10, true);
        persona.animations.add('derecha', [27, 28, 29,30,31,32,33,34,35], 10, true);
        persona.animations.add('izquierda', [9, 10, 11,12,13,14,15,16,17], 10, true);
        persona.animations.add('abajo', [18, 19, 20,21,22,23,24,25,26], 10, true);


        teclaDrecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        juego.physics.startSystem(Phaser.Physics.ARCADE);
        juego.physics.arcade.enable(persona);
        persona.body.collideWorldBounds=true;
    },

    update: function () {
        fondoJuego.tilePosition.x -= 1;
        // flappy.animations.play('vuelo');

        if (teclaDrecha.isDown) {
            // flappy.x++;
            persona.position.x+=2;
            persona.animations.play('derecha');
        } else if (teclaIzquierda.isDown) {
            // flappy.x--;
            persona.position.x-=2;
            persona.animations.play('izquierda');
        } else if (teclaArriba.isDown) {
            // flappy.y--;
            persona.position.y-=2;
            persona.animations.play('arriba');
        } else if (teclaAbajo.isDown) {
            // flappy.y++;
            persona.position.y+=2;
            persona.animations.play('abajo');
        }
    }
}


juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
