var LivingCreature = require("./livingcreature.js")


module.exports = class gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 30;


    }


    mult() {
        var empty = empty[Math.floor(Math.random()*items.length)];

        if (empty && this.energy > 60) {
            var empty = random(this.chooseCell(0));
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var gt = new gishatich(newX, newY);
            gishatichArr.push(gt);

        }


    }




    move() {

        var empty = random(this.chooseCell(0));
        this.energy--

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var food = random(this.chooseCell(2));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }
    }

    eat1() {
        var food = random(this.chooseCell(4));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in vorsordArr) {
                if (vorsordArr[i].x == newX && vorsordArr[i].y == newY) {
                    vorsordArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }
    }


    // eat() {
    //     var food = random(this.chooseCell(2));
    //     if (food) {
    //         var newX = food[0];
    //         var newY = food[1];
    //         matrix[newY][newX] = 3;
    //         matrix[this.y][this.x] = 0;
    //         for (var i in xotakerArr) {
    //             if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
    //                 xotakerArr.splice(i, 1)
    //             }
    //         }
    //         }
    //         this.x = newX;
    //         this.y = newY;
    //         this.energy += 2;
    // }




    //     eat1() {
    //         var food1 = random(this.chooseCell(4));
    //         if (food1) {
    //             var newX = food1[0];
    //             var newY = food1[1];
    //             matrix[newY][newX] = 3;
    //             matrix[this.y][this.x] = 0;
    //             for (var i in vorsordArr) {
    //                 if (vorsordArr[i].x == newX && vorsordArr[i].y == newY) {
    //                     vorsordArr.splice(i, 1)
    //                 }
    //             }
    //             }
    //             this.x = newX;
    //             this.y = newY;
    //             this.energy += 2;
    //         }



    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }

    }

}
