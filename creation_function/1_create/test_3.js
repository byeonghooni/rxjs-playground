// try-catch 문 없이 에러가 발생하는 create 함수

const { Observable } = require('rxjs');

const observable1to10$ = Observable.create(function (observer) {
  console.log('start');
  for (let value = 1; value <= 10; value++) {
    observer.next(value);
    consloe.log('error called');
  }
  observer.complete();
  console.log('end');

  return function () {
    console.log('unsubscribed');
  };
});

observable1to10$.subscribe(
  function next(value) {
    console.log(`next value: ${ value }`);
  },
  function error(err) {
    console.error('error', err.message);
  },
  function complete() {
    console.log('complete');
  },
);

// start
// next value: 1
// error consloe is not defined

// 이때도 subscribe의 error 함수를 호출해 에러 메시지를 출력한다.
