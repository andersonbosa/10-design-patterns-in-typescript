/* creational pattern */

class IOSButton { }
class AndroidButton { }

class ButtonFactory {
  createButton (os: string): IOSButton | AndroidButton {
    if (os == 'ios') {
      return new IOSButton()
    } else {
      return new AndroidButton()
    }
  }
}


/* smart object creation */
const factory = new ButtonFactory()
const os = '...'
const btn1 = factory.createButton(os)
const btn2 = factory.createButton(os)
