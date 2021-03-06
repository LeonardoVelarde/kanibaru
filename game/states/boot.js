var States = {};

States.Boot = function(game){
	
};

States.Boot.prototype = {
	preload: function(){
		this.game.load = this.game.load.image('title', '/assets/images/KANIBARU.png');
		//this.game.load = this.game.load.image('normalHead', 'assets/images/duke/normalHead.png');
		//this.game.load = this.game.load.image('normalTorso', 'assets/images/duke/normalTorso.png');
		//this.game.load = this.game.load.image('normalLegs', 'assets/images/duke/normalLegs.png');
		this.game.load = this.game.load.image('redSplash', '/assets/images/red.png');

		this.game.load = this.game.load.image('map1', '/assets/images/terrain/map1.png');
		this.game.load = this.game.load.image('oruro1', '/assets/images/terrain/oruro.png');
		this.game.load = this.game.load.image('oruro2', '/assets/images/terrain/oruro.png');
		this.game.load = this.game.load.image('cathedralOpen', '/assets/images/terrain/socOpen.png');
		this.game.load = this.game.load.image('cathedralClosed', '/assets/images/terrain/socClose.png');
		this.game.load = this.game.load.image('sajama', '/assets/images/terrain/sajama.png');
		this.game.load = this.game.load.image('mine', '/assets/images/terrain/mine.png');

		this.game.load = this.game.load.spritesheet('normalHead', 'assets/images/duke/normalHeadSheet.png', 110, 110);
		this.game.load = this.game.load.spritesheet('normalTorso', 'assets/images/duke/normalTorsoSheet.png', 110, 110);
		this.game.load = this.game.load.spritesheet('normalLegs', 'assets/images/duke/normalLegsSheet.png', 110, 110);
		this.game.load = this.game.load.spritesheet('caporalLegs', 'assets/images/duke/caporalLegsSheet.png', 110, 110);
		this.game.load = this.game.load.spritesheet('morenoLegs', 'assets/images/duke/morenoLegsSheet.png', 110, 110);
		this.game.load = this.game.load.spritesheet('diabloHead', 'assets/images/duke/diabloHeadSheet.png', 110, 110); 

		
		this.game.load = this.game.load.spritesheet('dukeCollider', 'assets/images/duke/collider.png');

		this.game.load = this.game.load.image('obstacle', 'assets/images/obstacles/collider.png');

		this.game.load = this.game.load.spritesheet('enemy1', 'assets/images/enemies/enemy1.png', 100, 100);
		this.game.load = this.game.load.spritesheet('bat', 'assets/images/enemies/bat.png', 64, 64);
		this.game.load = this.game.load.spritesheet('ghost', 'assets/images/enemies/ghost.png', 64, 64);
		this.game.load = this.game.load.image('supay', 'assets/images/enemies/TioSupay.png');

		this.game.load = this.game.load.image('bullet1', 'assets/images/bullets/blue.png');
		this.game.load = this.game.load.image('bulletStone1', 'assets/images/bullets/stone1.png');
		this.game.load = this.game.load.image('bulletFireStone1', 'assets/images/bullets/firestone1.png');
		this.game.load = this.game.load.image('hellfire', 'assets/images/bullets/hellfire1.png');

		// COLLECTIBLES
		this.game.load = this.game.load.image('sling', 'assets/images/items/sling.png');
		this.game.load = this.game.load.image('barrilMoreno', 'assets/images/items/barrilMoreno.png');
		this.game.load = this.game.load.image('pantalonCaporal', 'assets/images/items/pantalonCaporal.png');
		this.game.load = this.game.load.image('mascaraDiablo', 'assets/images/items/mascaraDiablo.png');

		this.game.load = this.game.load.image('tunica', 'assets/images/items/tunica.png');
		this.game.load = this.game.load.image('cross', 'assets/images/items/cross.png');
		this.game.load = this.game.load.image('sword', 'assets/images/items/sword.png');

		this.game.load = this.game.load.image('cutscene1', 'assets/images/cutscenes/1.png');

		this.game.load = this.game.load.audio('chiruchiru', 'assets/sounds/music/Chiru8bit.wav');
		this.game.load = this.game.load.audio('idilio', 'assets/sounds/music/idilio8bit.wav');
		this.game.load = this.game.load.audio('sanjose', 'assets/sounds/music/sj8bit.wav');

		this.game.load = this.game.load.audio('step', 'assets/sounds/effects/concrete-step.wav');
		this.game.load = this.game.load.audio('dukeouw', 'assets/sounds/effects/duke-ouw.mp3');
		this.game.load = this.game.load.audio('dukeshoot1', 'assets/sounds/effects/duke-shoot.mp3');
		this.game.load = this.game.load.audio('dukeshoot2', 'assets/sounds/effects/duke-shoot.wav');
		this.game.load = this.game.load.audio('enemyouch', 'assets/sounds/effects/enemy-ouch.wav');
		this.game.load = this.game.load.audio('enemyshoot', 'assets/sounds/effects/enemy-shoot.wav');
		this.game.load = this.game.load.audio('pickup', 'assets/sounds/effects/item-pickup.ogg');
	},
	create: function(){
		this.state.start('Play');
	}
};

// La idea de este State es que solo se lo utilize para cargar los assets necesarios para el inicio del juego