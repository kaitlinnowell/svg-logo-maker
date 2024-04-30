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
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
    <text x="150" y="${this.textHeight}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`   
    }
}

class Circle extends Shape {
    constructor(text, color) {
        super(text, color);
        this.textHeight = 120;
        this.fontSize = 60;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(text, color) {
        super(text, color);
        this.textHeight = 140;
        this.fontSize = 50;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(text, color) {
        super(text, color);
        this.textHeight = 120;
        this.fontSize = 60;
    }

    render() {
        return `<rect x="60" y="10" width="180" height="180" fill="${this.color}"/>`
    }
}
module.exports = {
    Triangle,
    Circle,
    Square
}