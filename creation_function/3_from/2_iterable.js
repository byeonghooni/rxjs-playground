// from 함수로 이터러블 그 중에서도 특별한 형태인 제너레이터를 사용해 값을 발행하는 예다.

// 제너레이터 함수 안에 정의한 로직으로 이터러블 객체를 순회하며 값을 하나씩 가져올 때
// yield를 만나면 값을 전달하고 그 다음 단계를 실행하는 방식으로 동작한다.


const { from } = require('rxjs');

function* forLoopGen(start, end, increment) {
  for (let x = start; x <= end; x += increment) {
    yield x;
  }
}

from(forLoopGen(1, 15, 2)).subscribe(
  x => console.log(`next: ${ x }`),
  err => console.error(`err: ${ err }`),
  () => console.log('completed')
);

// next: 1
// next: 3
// next: 5
// next: 7
// next: 9
// next: 11
// next: 13
// next: 15
// completed

// 제너레이터를 사용했을 때 장점은 제너레이터 함수를 정의할 때 기존 명령형 프로그래밍 코드를 적용할 수 있다는 것이다.
// 또한 제너레이터 함수를 실행하는 동안 지정한 로컬 변수에 상태 값을 저장할 수 있기도 하다.
