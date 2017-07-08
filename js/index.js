var Game = function(){
    this.turnArray = [];
    this.round = 1;
    this.userArray = [];
}

Game.prototype.initialize = function() {
    this.populate();
}

Game.prototype.populate = function() {
    for (var i = 0; i < 20; i++) {
        this.turnArray.push(Math.floor(Math.random() * (5 - 1)) + 1);
    }
    console.log(this.turnArray);
}

$(document).ready(function() {
    var newGame = new Game();
    console.log(newGame);
    $('#on').click(function() {
        newGame.initialize();
        $('#round-title').toggle();
    })

    $('.button').click(function() {
        //newGame.userArray.push(parseInt($(this).val()));
        console.log($(this).find('input').val());
    })

})
