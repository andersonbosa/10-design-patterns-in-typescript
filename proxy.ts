/* structural pattern */

const original = { name: 'sarah' }

const reactive = new Proxy(original, {
  get (target, key) {
    console.log('Tracking: ', key)
    return target[key]
  },
  set (target, key, value) {
    console.log('Updating UI...')
    return Reflect.set(target, key, value)
  }
})

reactive.name /* Tracking: sarah */
reactive.name = 'iulli' /* Updating UI... */
