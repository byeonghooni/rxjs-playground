// of 함수를 이용하는 비동기 스케줄러

// of 함수는 제일 마지막 인자의 데이터 타입이 RxJS의 Scheduler 타입이면 해당 스케줄러를 옵저버블에 적용할 수 있다.

// 비동기 스케줄러를 구현해보자.

const { of, asapScheduler } = require('rxjs');

console.log('start');
of(1, 2, 'a', 'b', 3, 4, ['array1', 'array2'], asapScheduler).subscribe(
  x => console.log(`next: ${ x }`),
  err => console.log(`err: ${ err }`),
  () => console.log('completed')
);
console.log('end');

// start
// end
// next: 1
// next: 2
// next: a
// next: b
// next: 3
// next: 4
// next: array1,array2
// completed

// next 함수 실행을 비동기 처래해 start, end를 출력한 후 옵저버블 구독 부분을 실행하는 것을 확인할 수 있다.
