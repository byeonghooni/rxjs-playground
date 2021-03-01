// take, takeUntil, takeWhile, takeLast 연산자들은 명시적인 구독 해제를 하지 않도록 도움을 준다.

// 옵저버 패턴은 구독과 구독 해제를 할 수 있는데,
// RxJS는 unsubscribe 함수를 명시적으로 호출해 구독을 해제해야 한다.
// 그런데 이 방법은 옵저버블을 구독하는 곳(subscribe 함수를 호출하는 곳)과 구독 해제하는 곳(unsubscribe 함수를 호출하는 곳)이
// 나위어 있어 옵저버블의 전체 사이클을 관리하기 어렵다.

// 예를들어 unsubscribe 함수를 호출하는 코드가 subscribe 함수를 호출하는 코드와 멀리 떨어져 여기저기 흩어져 있다고 생각해보면
// 구독한 옵저버블이 연산자와 상관없이 구독 해제된다면 디버깅할 때 어디서 unsubscribe 함수를 호출하는지 찾아봐야 하는 번거로움이 있다.

// 그러나 위 연산자들은
// 특정 개수만큼만 옵저버블을 구독하고 실행을 종료하거나
// 특정 조건을 만족하는 값을 발행할 때만 구독하다가 해당 조건을 만족하지 않을 때 구독 해제할 수 있다.
// 반대로 특정 조건을 만족하기 전까지 값을 발행하다가 조건을 만족하면 complete 함수를 호출해 구독 완료할 수 있도록 만들 수 있다.

// 이렇게 complete 함수를 호출하는 시점을 제어할 수 있는 연산자에는 take라는 접두어가 붙는다.


// take 연산자
// 소스 옵저버블에서 정해진 개수만큼 구독하고 구독을 해제한다.

// 함수의 원형은 다음과 같다.
// take<T>(count: number): MonoTypeOperatorFunction<T>

// count는 next 함수에서 발행하는 값 중 최댓값이다.

// take 연산자는 interval 함수처럼 무한 반복 실행할 수 있는 연산자와 같이 사용하면 유용하다.

const { take } = require('rxjs/operators');
const { interval } = require('rxjs');

interval(1000)
  .pipe(
    take(5)
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    err => console.error(`err: ${ err.message }`),
    () => console.log('completed')
  );

// result: 0
// result: 1
// result: 2
// result: 3
// result: 4
// completed
