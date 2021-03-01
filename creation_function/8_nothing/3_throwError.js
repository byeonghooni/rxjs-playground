// throwError 함수는 옵저버블로 값을 발행하다가
// 특정 에러를 발생시키고 종료해야 하는 상황을 옵저버블 안에 포함시킬 때 사용한다.
// 즉 에러를 인자로 사용해 subscribe 함수 안의 error 함수만 실행하고 옵저버블 구독을 완료한다.

// 함수 원형은 다음과 같다.
// throwError(
//   error: any,
//   scheduler?: ScheduleLike
// ): Observable<never>

// error는 실제 알릴 에러를 넣는다.
// 어떤 데이터 타입을 사용하든 상관없으나 주로 자바스크립트 표준 내장 객체인 Error를 넣는다.

const { throwError } = require('rxjs');
console.log('start');
throwError(new Error('throw error'))
  .subscribe(
    x => console.log(`next(${ x })`),
    err => console.error(err.message),
    () => console.log('completed')
  );
console.log('end');

// start
// throw error
// end
