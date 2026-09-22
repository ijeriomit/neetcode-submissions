class Shape {

    constructor(){
        if (new.target === Shape) {
            throw new TypeError("Cannot constructor abstract instances directly!");
        }
    }
    /**
     * @return {Shape}
     */
    clone() {}
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    /**
     * @return {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @return {Shape}
     */
    clone() {
        return new Rectangle(this.width, this.height);
        // Write your code here
    }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    /**
     * @return {number}
     */
    getLength() {
        return this.length;
    }

    /**
     * @return {Shape}
     */
    clone() {
        return new Square(this.length);
        // Write your code here
    }
}

class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes) {
        const clones = [];
        for(let i =0; i < shapes.length; i++){
            clones.push(shapes[i].clone());
        }
        return clones;
    }
}
