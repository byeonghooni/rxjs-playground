// skipWhile 연산자
// skipWhile 연산자는 predicate 함수가 조건을 만족할 대 값 발행을 건너뛴다.
// 조건을 만족하지 않는 순간부터는 조건과 상관없이 계속 값을 발행한다.

// 함수의 원형은 다음과 같다.
// skipWhile<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction

const { interval } = require('rxjs');
const { skipWhile, take } = require('rxjs/operators');

interval(300)
  .pipe(
    skipWhile(x => x < 4),
    take(3)
  )
  .subscribe(
    x => console.log(x),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );

// 4
// 5
// 6
// completed
