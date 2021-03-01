// NEVER는 어떤 값을 발행하지 않게 하는 상수 옵저버블이다.
// complete, error 함수도 없는 정말 아무것도 하지 않는 상수다.

const { NEVER } = require('rxjs');

console.log('start');
NEVER.subscribe(
  x => console.log(`next(${ x })`),
  null,
  () => console.log('completed')
);
console.log('end');

// start
// end

// 아무것도 하지 않고 그냥 옵저버블을 생성할 필요가 있을 때 사용한다고 생각하면 된다.
