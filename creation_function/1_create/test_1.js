// create 함수는 옵저버블이 어떤 작업을 할지 정의해 생성한다.
// Observable 클래스에 속해 있는 기본 함수이기도 하다.

const { Observable } = require('rxjs');

const observable1to10$ = Observable.create(function (observer) {
  console.log('start');
  for(let value = 1; value <= 10; value++) {
    observer.next(value);
  }
  observer.complete();
  observer.next(11);
  observer.error(new Error('error'));
  observer.complete();

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
// next value: 2
// next value: 3
// next value: 4
// next value: 5
// next value: 6
// next value: 7
// next value: 8
// next value: 9
// next value: 10
// complete
// end
// unsubscribed

// 구독을 해제할 때는 obSubscription 에서 리턴한 TeardownLogic 함수를 호출한다.
// 구독을 완료한 후 호출되며 내부에서 생성한 자원을 해제해야 할 때 사용한다.

// observer.complete() 이후 에도 console.log('end') 가 실행됨
// 그러므로 구독을 모두 완료한 후 불필요한 동작이 일어나지 않도록 주의해야 한다.
