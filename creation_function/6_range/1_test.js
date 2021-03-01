// range는 일정한 범위를 지정한 후 해당 범위 안 있는 숫자를 값으로 발행하는 옵저버블을 생성한다.

// 함수 원형은 다음과 같다.
// range(
//   start: number = 0,
//   count: number = 0,
//   scheduler?: ScheduleLike
// ): Observable<number>

const { range } = require('rxjs');

range(1, 5).subscribe(
  x => console.log(`x: `, x),
  err => console.error('x err: ', err),
  () => console.log('x completed')
);

range(2, 5).subscribe(
  y => console.log(`y: `, y),
  err => console.error('y err: ', err),
  () => console.log('y completed')
);

// x:  1
// x:  2
// x:  3
// x:  4
// x:  5
// x completed
// y:  2
// y:  3
// y:  4
// y:  5
// y:  6
// y completed
