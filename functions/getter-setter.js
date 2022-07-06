
const rectangle = {
  set x(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log(`Error: invalid value ${x} for x`);
    }
  },
  set y(y) {
    if (y > 0) {
      this._y = y;
    } else {
      console.log(`Error: invalid value ${y} for y`);
    }
    this._y = y
  },
  get area() {
    return this._x * this._y;
  },
  get perimeter() {
    return 2 * (this._x + this._y);
  }
}

rectangle.x = -2
rectangle.x = 5
rectangle.y = 0
rectangle.y = 4
console.log("Area:", rectangle.area);
console.log("Perimeter:", rectangle.perimeter);

