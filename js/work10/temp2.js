;(function () {
    window.   = function () {
        this.player1 = new Fighter('Cat', 10, 100, 1, 20);
        this.player2 = new Fighter('Dog', 10, 100, 1, 20);
        this.fight();
    };

    SimulatorBattle.prototype.fight = function () {
          this.player2.protect(this.player1.attack());
          this.player1.protect(this.player2.attack());

          if(this.player1.isAlive() && this.player2.isAlive()) {
              console.log(this.player1.toString());
              console.log(this.player2.toString());
              var that = this;
              setTimeout(function () {
                  that.fight();
              }, 1000);
          } else if (!this.player1.isAlive() && !this.player2.isAlive()) {
              console.log('Friendship')
          } else if (this.player1.isAlive()) {
              console.log('Win ' + this.player1.name)
          } else {
              console.log('Win ' + this.player2.name)
          }
    };

    function Fighter(name, armor, health, minA, maxA) {
        this.name = name;
        this.armor = armor;
        this.health = health;
        this.minA = minA;
        this.maxA = maxA;
    }

    Fighter.prototype.attack = function () {
        return Math.floor(Math.random()*(this.maxA - this.minA + 1) + this.minA);
    };

    Fighter.prototype.protect = function (attack) {
        var damage = attack - this.armor;
        if (damage > 0) {
            this.health -= damage;
        }
    };

    Fighter.prototype.isAlive = function () {
      return this.health > 0;
    };

    Fighter.prototype.toString = function () {
        return 'Player ' + this.name + '. Health: ' + this.health;
    };

}());