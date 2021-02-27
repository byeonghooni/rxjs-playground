// Observable catch 문에서 observer.error 사용 예제

const { Observable } = require('rxjs');

const observable1to10$ = Observable.create(function (observer) {
  console.log('start');
  try {
    for(let value = 1; value <= 10; value++) {
      observer.next(value);
      consloe.log('error called');
    }
  } catch (e) {
    observer.error(e);
  }

  console.log('end');

  return function () {
    console.log('unsubscribed')
  }
});

observable1to10$.subscribe(
  function next(value) {
    console.log(`next value: ${value}`);
  },
  function error(err) {
    console.error('error', err.message);
  },
  function complete() {
    console.log('complete');
  },
)

// start
// next value: 1
// error consloe is not defined
// end
// unsubscribed

// observer.error를 실행해 에러를 정상적으로 확인히면 observer.complete를 실행하지 않아도 구독을 해제할 수 있다.
// 에러가 발생했을 때라도 자원 해제 등의 작업을 해 프로그램을 최적화는 데 도움을 준다.
