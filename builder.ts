/* creational pattern */
class Hotdog {
  constructor(
    public bun: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean,
  ) { }

  addKetchup () {
    this.ketchup = true
    return this
  }
  addMustard () {
    this.mustard = true
    return this
  }
  addKraut () {
    this.kraut = true
    return this
  }
}

const myLunch = new Hotdog('gluten free')

/* method chaining */
myLunch
  .addKetchup()
  .addMustard()
  .addKraut()

