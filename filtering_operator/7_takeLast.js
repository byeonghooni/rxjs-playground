// takeLast 연산자
// takeLast 연산자는 마지막에 발행한 값을 기준으로 인자로 설정한 수 만큼 값을 발행한다.
// last 연산자 처럼 마지막에 발행한 최신 값을 알려고 complete 함수를 호출한다.

// 함수의 원형은 다음과 같다.
// takeLast<T>(count: number): MonoTypeOperatorFunction<T>

// 숫자 타입의 count에 마지막에 발행한 값을 기준으로 최대 발행할 값 수를 설정한다.

const { takeWhile, takeLast } = require('rxjs/operators');
const { interval } = require('rxjs');

interval(300)
  .pipe(
    takeWhile(x => x <= 10),
    takeLast(4)
  )
  .subscribe(
    x => console.log(x),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );

// 7
// 8
// 9
// 10
// completed
