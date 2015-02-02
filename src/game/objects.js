game.module(
    'game.objects'
)
.body(function() {
    
    game.createClass('Test', {
	init: function(x, y) {
	    this.sprite = new game.Sprite('red', x, y, {
		anchor: {x: 0.5, y: 0.5}
	    });
	    // this.sprite = new game.Sprite('red');
	    // this.sprite.anchor.set(0.5, 0.5);
	    // this.sprite.position.set(x, y);
	}
    });

});
