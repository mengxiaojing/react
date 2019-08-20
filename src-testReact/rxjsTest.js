// Import stylesheets
import { take } from 'rxjs/operators';
import { Observable, of, fromEvent, from, interval } from 'rxjs';


/*const eleBtn = document.querySelector('#btn')
const click$ = fromEvent(eleBtn, 'click')

click$.pipe(take(1))
  .subscribe(e => {
    console.log('只可点击一次')
    eleBtn.setAttribute('disabled', '')
  })
  
const source$ = new Observable(observer => {
  observer.next(1)
  observer.next(2)  
  observer.next(3)
})
const observer = {
  next : item => console.log(item) 
}
console.log('start')
source$.subscribe(observer)
console.log('end')
source$.subscribe(
  item => console.log(item),
  e => console.log(e),
  () => console.log('complete')
)
const source$ = new Observable(observer => {  
  let number = 1
  setInterval(() => {     observer.next(number++)   }, 1000) })
  const observer = {   next : item => console.log(item) }
  const subscription = source$.subscribe(observer) 
  setTimeout(() => {   subscription.unsubscribe() }, 5000)
const source$ = of(7, 8, 9)
const observer = {
  next : item => console.log(item+10) 
}
source$.subscribe(observer)*/
const source$ = from([10,11,12])
const observer = {
  next : item => console.log(item+1)
}
source$.subscribe(observer)
interval(1000).subscribe(() => console.log(123))
