const { from } = require('rxjs');

// from 함수로 프로미스의 값을발행하는 예제다.
// 배열, 문자열, 제너레이터와 달리 1개의 값만 취급하며, 비동기로 동작해 콜백 함수로 값이나 에러를 전달받을 수 있다.

from(new Promise((resolve, reject) => {
  console.log('promise1 begin');
  setTimeout(() => resolve('promise1 resolve'), 700);
  console.log('promise1 end');
})).subscribe(
  x => console.log(`next: ${ x }`),
  err => console.error(`err: ${ err }`),
  () => console.log('completed')
);

from(new Promise((resolve, reject) => {
  console.log('promise2 begin');
  setTimeout(() => reject(new Error('promise2 reject')), 1000);
  console.log('promise2 end');
})).subscribe(
  x => console.log(`next: ${ x }`),
  err => console.error(`err: ${ err }`),
  () => console.log('completed')
);

// promise1 begin
// promise1 end
// promise2 begin
// promise2 end
// next: promise1 resolve
// completed
// err: Error: promise2 reject

// reject 가 실행했을 때 구독 해제 함수를 실행하지 않는다.
// 즉, 프로미스의 에러 처리나 값 발행은 옵저버블에서 지원하는 동작으로 변환된다.

// from 도 스케줄러 함수를 사용할 수 있다.
// of 랑 차이점은 of는 발행할 여러개의 인자를 넣고 마지막 인자에 scheduler 를 넣으는 반면에
// from은 발행할 한개의 인자를 넣고, 두 번째 인자에 scheduler 를 넣은다.
