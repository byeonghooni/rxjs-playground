// skipUntil 연산자
// skipUntil 연산자는 인자로 사용한 옵저버블의 값 발행을 시작할 때까지 소스 옵저버블에서 발행하는 값을 건너뛴다.

// 함수의 원형은 다음과 같다.
// skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>

const { interval } = require('rxjs');
const { skipUntil, take } = require('rxjs/operators');

interval(300)
  .pipe(
    skipUntil(interval(1500)),
    take(3)
  )
  .subscribe(
    x => console.log(x),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );

// skipUntil 연산자 안에 인자로 사용한 옵저버블(interval(1500))을
// 소스 옵저버블(interval(300))보다 먼저 구독한다.
