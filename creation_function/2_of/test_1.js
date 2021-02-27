// of 함수는 나열된 인자를 순서대로 발행하도록 옵저버블을 생성한다.
// 간단한 몇 개의 값을 발행할 때는 create 대신 of 함수를 사용하면 편리하다.

// 함수의 원형은 다음과 같다.
// of<T>(...args: Array<T | SchedulerLike>): Observable<T>
// args에는 next 함수로 발행할 값을 설정한다.
// 실제 값을 발행할 때는 나열된 인자를 배열로 변환해 순서대로 발행한다.
// ScheduleLike에는 next 함수로 값을 발행한다는 사실을 알리는 스케줄러를 넣는다.

const { of } = require('rxjs');

console.log('start');
of(1, 2, 'a', 'b', 3, 4, ['array1', 'array2']).subscribe(
  x => console.log(`next: ${ x }`),
  err => console.log(`err: ${ err }`),
  () => console.log('completed')
);
console.log('end');

// start
// next: 1
// next: 2
// next: a
// next: b
// next: 3
// next: 4
// next: array1,array2
// completed
// end

// 인자 순서대로 값을 발행한다.
// next 함수로 값을 다 발행하고 구독 해지 함수를 실행하면 complete 함수가 실행된다.
