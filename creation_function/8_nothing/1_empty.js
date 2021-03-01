// empty 함수는 어떤 값을 발행하지 않고 complete 함수만 호출한다.
// 이 함수만 사용하지는 않고 다른 함수나 연산자와 조합해서 complete 함수를 호출해야만 한다.
// 즉, 값을 발행하다가 중간에 멈춰야 하는 상황이 있을 때 사용하면 된다.

const {} = require('rxjs');
const { empty, EMPTY } = require('rxjs');

empty()
  .subscribe(
    x => console.log(`next(${ x })`),
    null,
    () => console.log('completed')
  );

// RxJS 6부터는 상수 사용
EMPTY.subscribe(
  x => console.log(`next(${ x })`),
  null,
  () => console.log('completed')
);


// completed
// completed
