const expect = require("chai").expect;

class Rectangle {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.height * this.width;
    }

}

let rect = new Rectangle(4, 5, 'Red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

describe("calcArea", function() {
    it("Should return 20 if the width and height are multiplied", function() {
        expect(rect.calcArea()).to.be.equal(20);
        });
});
