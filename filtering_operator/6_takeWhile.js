// takeWhile 연산자
// takeWhile 연산자는 옵저버블이 아니라 filter 연산자처럼 특정 조건을 갖는 predicate 함수라는 파라미터가 있다.

// 함수의 원형은 다음과 같다.
// takeWhile<T>(
//   predicate: (value: T, index: number) => boolean
// ): MonoTypeOperatorFunction<T>

// 소스 옵저버블에서 발행하는 값은 predicate 함수의 인자로 사용해
// 조건을 만족하는 동안 값을 발행하고, 조건을 만족하지 않으면 부모 옵저버블에서 더 값을 발행하지 않도록 구독을 해제한다.

const { filter, takeWhile } = require('rxjs/operators');
const { interval } = require('rxjs');

interval(300)
  .pipe(
    takeWhile(x => x < 10)
  )
  .subscribe(
    x => console.log(x),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// completed
