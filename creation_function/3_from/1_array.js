// from, fromEvent 두 함수 모두 구독할 수 있는 데이터 타입의 객체를 옵저버블로 변환한다.

// from 함수는 옵저버블로 변환할 수 있을 만한 객체들을 옵저버블로 변환해준다.
// from 함수에서 지원하는 데이터 타입의 객체는 다음과 같다.
// Observable, Array, ArrayLike, String, Iterable, Promise
// 이외의 다른 데이터 타입 객체는 옵저버블을 생성하지 못하고 TypeError를 발생시킨다.

// 함수의 원형은 다음과 같다.
// from<T>(input: ObservableInout<T>, scheduler?:SchedulerLike): Observable<T>

const { from } = require('rxjs');

// Array
from([1, 2, 3, 4]).subscribe(
  x => console.log(`next: ${ x }`),
  null,
  () => console.log('completed')
);

// next: 1
// next: 2
// next: 3
// next: 4
// completed

// from 함수 실행을 정상적으로 완료하면 구독 해제 함수가 실행되어 'complete' 메시지를 실행한다.

// ArrayLike
from({ '0': 1, '1': 2, '2': 3, '3': 4, 'length': 4 }).subscribe(
  x => console.log(`next: ${ x }`),
  null,
  () => console.log('completed')
);
// next: 1
// next: 2
// next: 3
// next: 4
// completed
