// timer 함수는 첫 번째 인자로 설정한 시간을 기다린 후 0이란 값을 발행한다.
// 그 후 두 번째 인자로 설정한 시간 간격만큼 1씩 증가하는 값을 발행한다.
// 두 번째 인자가 없다면 첫 번째 인자로 설정한 시간을 기다린 후 0이라는 값을 하나 발행할 뿐이다.

// 함수 원형은 다음과 같다.
// timer(
//   dueTime: number | Date = 0,
//   periodOrScheduler?: number | SchedulerLike,
//   scheduler?: SchedulerLike
// ): Observable<number>

const { timer } = require('rxjs');

timer(2000).subscribe(x => console.log(x));


timer(1000, 500).subscribe(x => console.log(x));

// 0
// 1
// 0
// 2
// 3
// 4
