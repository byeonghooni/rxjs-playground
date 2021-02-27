// defer 는 팩토리 함수로 옵저버블(또는 옵저버블로 변환할 수 있는 객체)를 생성한 후,
// 구독하는 시점에 팩토리 함수를 호출해 이미 생성한 옵저버블을 리턴받아 구독한다.

// from 함수를 사용하면 프로미스를 생성해 바로 동작한다.
// 하지만 defer 함수를 사용하면 옵저버블을 구독하는 시점에 프로미스를 생성할 수 있으므로
// 동작 심점을 옵저버블의 구독 시점으로 맞출 수 있다.

// 팩토리 함수는 옵저버블로 변환할 수 있는 객체를 옵저버블로 생성한 후 리턴한다.
// defer 함수는 subscribeToResult 라는 함수를 사용해 from 함수에서 언급한 데이터 타입을 팩토리 함수에서 리턴해도 알아서 옵저버블로 바꿔서 구독한다.
// 예를 들어 defer 함수를 사용해 팩토리 함수에서 프로미스를 생성한다면 from 함수를 사용할 필요 없이 바로 프로미스를 생성해 리턴한다.

// 마블 다이어그램을 보면 of 와 거의 유사한데
// 차이점은 팩토리 함수안에서 of 함수를 사용하므로 팩토리 함수가 of 함수의 구독 시점을 조절한다.

// 함수의 원형은 다음과 같다.
// defer<T>(observableFactory: () => SubscribableOrPromise<T> | void): Observable<T>
// observableFactory는 프로미스를 리턴하거나 옵저버블을 생성할 수 있는 팩토리 함수를 설정한다.

const { defer } = require('rxjs');

const source1$ = defer(() => new Promise((resolve, reject) => {
  console.log('promise1 begin');
  setTimeout(() => resolve('promise1 resolve'), 700);
  console.log('promise1 end');
}));
console.log('source1$ created');

const source2$ = defer(() => new Promise((resolve, reject) => {
  console.log('promise2 begin');
  setTimeout(() => reject(new Error('promise2 reject')), 1000);
  console.log('promise2 end');
}));
console.log('source2$ created');

console.log('before source1$ subscribe');

source1$.subscribe(
  x => console.log(`next: ${ x }`),
  err => console.error(`err: ${ err }`),
  () => console.log('completed')
);
console.log('after source1$ subscribe');

console.log('before source2$ subscribe');

source2$.subscribe(
  x => console.log(`next: ${ x }`),
  err => console.error(`err: ${ err }`),
  () => console.log('completed')
);
console.log('after source2$ subscribe');

// source1$ created
// source2$ created
// before source1$ subscribe
// promise1 begin
// promise1 end
// after source1$ subscribe
// before source2$ subscribe
// promise2 begin
// promise2 end
// after source2$ subscribe
// next: promise1 resolve
// completed
// err: Error: promise2 reject

// 프로미스 실행 시점에 따른 from 및 defer 함수 선택
// 보통 create 함수로 생성한 옵저버블은 인자로 사용하는 함수가 구독 시점에 동작한다.
// 그런데 프로미스는 객체 생성 시점에 안에 있는 함수가 실행된다는 특징이 있다.
// 따라서 프로미스를 사용할 때는 이런 차이를 구분해 from 및 defer 함수를 선택해야 한다.
// 판단 기준은 다음과 같다.
// - from 함수는 프로미스 안 구현 부분이 언제 실행되든 상관없을 때 사용하고,
//   defer 함수는 옵저버블을 구독하는 시점에 프로미스를 생성하여 프로미스 안 구현 부분이 실행되어야 할 때 사용한다.
// - from 함수는 이미 실행 중이거나 완료한 프로미스를 옵저버블을 만들 때 적합하고,
//   defer 함수는 프로미스 실행 시점(프로미스 객체 생성 시점)이 구독하는 시점이어야 할 때 적합하다.
