/* creational pattern */

/* our prototype */
const zombie = {
  eatBrains () {
    return 'yum 🧠'
  }
}

const amilton = Object.create(
  zombie,
  {
    name: {
      value: "Amilton Pereira"
    }
  }
)

amilton.__proto__ /* bad */
Object.getPrototypeOf(amilton) /* good */
