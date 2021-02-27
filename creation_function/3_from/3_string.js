const { from } = require('rxjs');

// from 함수로 옵저버블을 생성해 문자열의 각 문자를 값으로 발행한다.
from('hello').subscribe(
  x => console.log(`next: ${ x }`),
  null,
  () => console.log('completed')
);

// next: h
// next: e
// next: l
// next: l
// next: o
// completed
