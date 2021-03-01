// 옵저버블을 구독하다 보면 특정 조건을 만족하는 값을 발행할 필요 없이 버려야 할 떄도 있다.
// 이때는 skip으로 시작하는 연산자를 사용해서 값을 발행하지 않을 수 있다.

// 예를들어 버튼을 세 번 클릭한 후 네 번째 클릭했을 떄 어떤 처리를 하고 싶다고 가정해보자.
// skip(3)을 적용하면 처음 버튼을 세 번 클릭했을 때는 값을 발행하지 않고 네 번째 클릭했을 때부터 발행하도록 할 수 있다.
// skip, skipUntil, skipWhile 이 있다.

// skip 연산자
// skip 연산자는 소스 옵저버블에서 발행하는 값을 인자로 설정한 개수만큼 건너뛰고 그다음 값부터 발행하는 연산자다.
// 해당 개수만큼 값들을 건너뛰다가 그다음부터 값을 발행한 후 complete 함수를 호출한다.

// 함수의 원형은 다음과 같다.
// skip<T>(count: number): MonoTypeOperatorFunction<T>

const { interval } = require('rxjs');
const { skip, take } = require('rxjs/operators');

interval(300)
  .pipe(
    take(10),
    skip(3)
  )
  .subscribe(
    x => console.log(x),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );

// 3
// 4
// 5
// 6
// 7
// 8
// 9
// completed
