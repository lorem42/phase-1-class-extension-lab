// Your code here


class Polygon {
    constructor(arr) {
        this.arr = arr
    }
    get countSides() {
        return this.arr.length;
    }
    get perimeter() {
        return this.arr.reduce((total, el) => el + total);
    }
}
class Triangle extends Polygon {
    constructor(arr) {
        super(arr);
    }
    get isValid() {
        return ((this.arr[2]+this.arr[1])>this.arr[0]);
    }
}
class Square extends Polygon {
    constructor(arr) {
        super(arr);
    }
    get isValid() {
        return this.arr.length === 4 && this.arr[0] === this.arr[1] && this.arr[2] === this.arr[3];
    }
    get area() {
        return this.arr[0] ** 2;
    }
}