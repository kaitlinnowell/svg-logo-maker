//Parent class
class Shape {
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(color) {
        this.textColor = color;
    }
    render() {};

    drawShape() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`   
    }
}

class Circle extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

    // drawShape() {
    //     super();
    // }
}

class Triangle extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`
    }
}
module.exports = {
    Triangle,
    Circle,
    Square
}