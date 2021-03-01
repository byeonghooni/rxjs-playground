// 필터링 연산자는 옵저버블에서 값을 발행할 때 조건을 정한다.
// - 조건에 해당하지 않으면 값을 발행하지 않도록 할 수 있다.
// - 값을 발행하는 도중에도 일정 조건에 해당하지 않으면 값 발행을 멈출 수 있다.
// - 더 발행할 값이 없으면 complete 함수를 호출할 수도 있다.
// - 원하는 조건일 때 complete 함수를 호출할 수도 있다.
//   특정 조건을 명시했을 때 구독 중인 옵저버블을 해제하는 코드 없이 연산자로만 옵저버블을 관리할 수도 있다.
// - 불필요한 연산을 실행하지 않도록 막을 수 있다.


// filter 연산자
// 참인지 거짓인지 판단하는 predicate 함수라는 파라미터가 있다.
// 그리고 조건을 만족(true)할 때만 해당 값을 발행하도록 한다.

// 함수의 원형은 다음과 같다.
// filter<T>(
//   predicate: (value: T, index: number) => boolean,
//   thisArg?: any
// ): MonoTypeOperatorFunction<T>

// predicate는 옵저버블이 생성한 값을 평가하는 함수다. true를 리턴하면 값을 발행하고, false를 리턴하면 값을 발행하지 않는다.
// thisArg는 predicate 함수를 사용할 때 this로 제공하는 값
// MonoTypeOperatorFunction<T>는 filter가 적용된 옵저버블을 리턴하는 함수로,
// pipe 함수에서 이 함수를 호출함으로써 옵저버블 인스턴스를 얻는다.

const { filter } = require('rxjs/operators');
const { range } = require('rxjs');

range(1, 5)
  .pipe(
    filter(x => x % 2 === 0)
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    null,
    () => console.log('completed')
  );
// result: 2
// result: 4
// completed

