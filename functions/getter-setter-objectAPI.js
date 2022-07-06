
const rectangle = {};
Object.defineProperty(rectangle, "area", {
  get () {
    return this._x * this._y;
  }
})
Object.defineProperty(rectangle, "perimeter", {
  get () {
    return 2 * (this._x + this._y);
  }
})
Object.defineProperty(rectangle, "x", {
  set(x) {
    if (x > 0)
      this._x = x
    else
      console.log(`Error: invalid value ${x} for x`)
  },
  get (x) {
    return this._x
  },
})
Object.defineProperty(rectangle, "y", {
  set(y) {
    if (y > 0)
      this._y = y
    else
      console.log(`Error: invalid value ${y} for y`)
  },
  get (y) {
    return this._y
  },
})

rectangle.x = -2
rectangle.x = 5
rectangle.y = 0
rectangle.y = 4
console.log("Area:", rectangle.area);
console.log("Perimeter:", rectangle.perimeter);

