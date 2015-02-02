game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects'
)
.body(function() {

game.createScene('Main', {
    init: function() {
	var test = new game.Test(300, 300);
	this.stage.addChild(test.sprite);
    }
});

game.start();

});
