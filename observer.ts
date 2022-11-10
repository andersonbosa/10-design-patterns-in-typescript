/* behavioral pattern */
/* push based system? */

/* rxjs used to abstraction */
import { Subject } from 'rxjs'

const news = new Subject()

const tv1 = news.subscribe(v => console.log(v + 'via Den TV'))
const tv2 = news.subscribe(v => console.log(v + 'via Batcave TV'))
const tv3 = news.subscribe(v => console.log(v + 'via Airport TV'))

news.next('breaking news: etc')
news.next('the war is over!')
