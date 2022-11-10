/* behavioral pattern */
/* pull base system? */
function range (start: number, end: number, step = 1) {
  return {
    next () {
      if (start < end) {
        start = start + step
        return {
          done: false,
          value: start
        }
      }

      return {
        done: true,
        value: end
      }
    },

    /* USE IT WITH for of */
    [Symbol.iterator] () {
      return this
    }
  }
}

for (const n of range(0, 100, 5)) {
  console.log(n)
}