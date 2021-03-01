// first 연산자는 1개만 발행하고 더 값을 발행하지 않는(complete 함수를 호출하는) 연산자다.
// 이벤트 기반의 프로그램에서 첫 이벤트만 받고 구독을 종료해야 할 때,
// 옵저버블 스트림 특정부분에서 1개의 값만 필요할 때 사용한다.

// 함수의 원형은 다음과 같다.
// first<T>(
//   predicate? (value: T, index: number, source: Observable<T>): boolean,
//   defaultValue?: T
// ): MonoTypeOperatorFunction<T>

// predicate 함수를 설정하면 조건을 만족했을 때의 값 하나만 발행하고 complete 함수를 호출한다.
// 만약 predicate 함수 조건을 만족하지 않는다면 소스 옵저버블을 계속 구독만 하다가 complete or error 함수를 호출할 때 같이 종료한다.
// defaultValue?는 소스 옵저버블에 유효한 값이 없을 때 발행하는 기본값을 설정한다.

const { first } = require('rxjs/operators');
const { range } = require('rxjs');

range(1, 5)
  .pipe(
    first()
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    null,
    () => console.log('completed')
  );

// result: 1
// completed

range(1, 5)
  .pipe(
    first(x => x > 3)
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    null,
    () => console.log('completed')
  );

// result: 4
// completed

range(1, 5)
  .pipe(
    first(x => x > 5),
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );
// err: no elements in sequence

range(1, 5)
  .pipe(
    first(x => x > 5, 10),
  )
  .subscribe(
    x => console.log(`result: ${ x }`),
    err => console.error(`err: ${err.message}`),
    () => console.log('completed')
  );

// result: 10
// completed

// filter 연산자와 달리 연산자에 해당하는 첫 값만 발행하면 구독을 중단한다.
// predicate 를 지정한 경우, 지정한 조건에 값이 없는 경우 error 가 발생하므로
// predicate 를 지정한 경우 defaultValue도 같이 설정하자
