/* structural pattern */

class PlumbingSystem {
  setPressure (v: number) { }
  turnOn () { }
  turnOff () { }
}

class ElectricalSystem {
  setVoltage (v: number) { }
  turnOn () { }
  turnOff () { }
}

class House {
  private plumbing = new PlumbingSystem()
  private electrical = new ElectricalSystem()

  public turnOnSystems () {
    this.electrical.setVoltage(120)
    this.electrical.turnOn()

    this.plumbing.setPressure(500)
    this.plumbing.turnOn()
  }

  public shutdown () {
    this.plumbing.turnOff()
    this.electrical.turnOff()
  }
}

const client = new House()
/* ugly details now are hidden */
client.turnOnSystems()
client.shutdown()
