/* behavioral pattern */

class Airplane {
  land () { }
}

class Runway {
  clear: boolean
}

class Tower {
  clearForLanding (runway: Runway, plane: Airplane) {
    if (runway.clear) {
      console.log(`Plane ${plane} is clear for landing`)
    }
  }
}

/* 
example of proxy: Express Middlewares 

Request => Middleware => Response
*/