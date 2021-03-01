// last 연산자는 마지막 값 1개만 발행하는 연산자다.
// next 함수로 전달한 값을 저장하다가 complete 함수를 호출할 때 마지막에 저장한 값을 발행한다.
// 여러 개의 값을 모아서 1개을 만들 때나
// complete 함수를 호출하기 진적의 값을 알아야 할 때 사용한다.

// 주의할 점은 interval 함수처럼 complete 함수를 호출하지 않는 소스 옵저버블을 사용할 때다.
// 영원히 값을 발행하지 않고 소스 옵저버블만 계속 동작하는 무한 루프에 빠진다.
// 따라서 complete 함수를 확실히 호출할 수 있는 옵저버블을 소스 옵저버블로 새용해야 한다.

// 함수의 원형은 다음과 같다.
// last<T>(
//   predicate?: (value: T, index: number, source: Observable<T>) => boolean,
//   defaultValue?: T
// ): MonoTypeOperatorFunction<T>

// predicate 함수의 조건에 맞는 값이 발행될 때마다 옵저버블 객체 내부에 최신 값을 업데이트하다가 complete 함수를 호출하면 해당 시점의 최신 값을 발행한다.
// 만약 조건에 해당하는 값이 하나도 없다면 아무것도 발행하지 않고 완료한다.
// defaultValue?는 predicate 함수의 조건이 맞지 않아 값이 전달되지 않았을 때 발행하는 기본값을 설정한다.

const { last } = require('rxjs/operators');
const { range } = require('rxjs');

range(1, 10)
  .pipe(
    last()
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    err => console.error(`err: ${ err.message }`),
    () => console.log('completed')
  );
// result: 10
// completed

range(1, 10)
  .pipe(
    last(
      x => x % 3 === 0
    )
  )
.subscribe(
  x => console.log(`result: ${ x }`),
  err => console.error(`err: ${ err.message }`),
  () => console.log('completed')
)
// result: 9
// completed

range(1, 10)
  .pipe(
    last(
      x => x > 10
    )
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    err => console.error(`err: ${ err.message }`),
    () => console.log('completed')
  )

// err: no elements in sequence

range(1, 10)
  .pipe(
    last(
      x => x > 10, 20
    )
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    err => console.error(`err: ${ err.message }`),
    () => console.log('completed')
  )
// result: 20
// completed

// first 연산자와 마찬가지로 predicate 를 지정한 경우, 지정한 조건에 값이 없는 경우 error 가 발생하므로
// predicate 를 지정한 경우 defaultValue도 같이 설정하자
