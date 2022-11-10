/* behavioral pattern */

/* works fine to FINITE STATE MACHINES */
class Human {
  think (mood) {
    switch (mood) {
      case 'happy':
        return 'I am :D'

      case 'sad':
        return 'I am :('

      default:
        return 'I am :|'
    }
  }
}


/* OTHER APPROACH: */

interface State {
  think (): string
}

class HappyState implements State {
  think () {
    return 'I am :D'
  }
}
class SadState implements State {
  think () {
    return 'I am :('
  }
}
class NeutralState implements State {
  think () {
    return 'I am :|'
  }
}

/* usage */
class HumanTwo {
  state: State

  constructor() {
    this.state = new HappyState()
  }

  think () {
    this.state.think()
  }

  changeState (state) {
    this.state = state
  }
}