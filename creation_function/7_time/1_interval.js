// interval 함수는 실행 시간 사이의 간격을 의미하는 숫자 값(ms)을 사용해 특정 시간마다 값을 발행한다.

// 함수 원형은 다음과 같다.
// interval(
//   period: 0 = 0,
//   scheduler: ScheduleLike = async
// ): Observable<number>

const { interval } = require('rxjs');

interval(1000).subscribe(x => console.log(x));

// 0
// 1
// 2
// 3
// 4
// 5

// 값이 바로 발행되지 않고, 인자로 설정한 시간 간격만큼 기다린 후 0부터 1씩 증가한 값을 연속으로 발행한다.
// interval 함수는 끊임없이 값을 발행하기 때문에 명시적으로 구독을 해제하거나, 어디까지 값을 발행할지 지정하는 연산자가 필요하다.
