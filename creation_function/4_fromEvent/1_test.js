// fromEvent 함수는 Node.js의 옵저버 팬터 구현인 EventEmitter 클래스의 객체와 조합하거나,
// 브라우저에서 발생하는 이벤트를 옵저버블로 바꿀 때 사용한다.

// 이벤트가 발생한 후 이를 일련의 스트림으로 바꿔 사용할 때 더 유용하다.

// 어떤 엘리먼트에 설정된 이벤트를 인자로 사용해 해당 이벤트를 차례로 발행한다는 사실을 알 수 있다.
// 함수 원형은 다음과 같다.
// fromEvent<T>(
//   target: FromEventTarget<T>,
//   eventName: string,
//   options?: EventListenerOptions | ((...args: any[]) => T),
//   resultSelector?: ((...args: any[]) => T)
// ): Observable<T>

// target 에는
// DOM에는 EventTarget 인터페이스,
// Node.js의 EventEmiiter 객체,
// jQuery의 이벤트 객체,
// NodeList나 HTMLCollection 객체 등을
// 넣어 이벤트 핸들러와 연결한다.

// options? 에는 addEventListener에 전달한 옵션을 넣으며

// resultSelector? 에는 값을 발행한 이후에 실행해야 할 함수를 넣는다. 이벤트 핸들러를 인자로 사용해 값 하나를 리턴해야 한다.

const { fromEvent } = require('rxjs');


fromEvent(document.querySelector('#btn1'), 'click').subscribe(
  event => {
    const pTag = document.createElement('p');
    pTag.appendChild(
      document.createTextNode(`event.target.id ${ event.target.id } clicked`)
    );
    document.querySelector('#nextResult').appendChild(pTag);
  },
  err => {
    const pTag = document.createElement('p');
    pTag.appendChild(
      document.createTextNode(`error: ${ err.message }`)
    );
    document.querySelector('#nextResult').appendChild(pTag);
  },
  () => {
    const pTag = document.createElement('p');
    pTag.appendChild(
      document.createTextNode('completed')
    );
    document.querySelector('#nextResult').appendChild(pTag);
  }
);
