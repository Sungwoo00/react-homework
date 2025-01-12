# UI 컴포넌트

> 해당 과제는 React API를 사용하여 구현하였습니다.

## 👀 구현 영상
![Switch](https://github.com/user-attachments/assets/2bff99f0-4ca0-4b4f-aa97-7fa5e0c35378)
![Chip](https://github.com/user-attachments/assets/4213346c-1f83-412a-a1bb-75412d9fe411)

[배포 사이트 보러가기👀](https://sungwoo00.github.io/react-homework/public/index.html)
## 🔎 컴포넌트 구조 및 기능

### 1. Switch Component

> 화면에 렌더링 해줄 스위치 형태 UI 담당 컴포넌트입니다.

```
function Switch({ isOn = false, onChange }) {
  return h(
    'button',
    {
      className: `switch ${isOn ? 'switch--on' : ''}`,
      role: 'switch',
      'aria-checked': isOn,
      onClick: () => onChange?.(!isOn),
    },
    h('img', {
      className: 'switch__knob',
      src: '../assets/knob.svg',
    })
  );
}
```

- props를 전달 받아 UI 렌더링
- role과 aria-checked 속성으로 웹 접근성 향상
- `isOn` 상태에 따른 조건부 스타일링
- 클릭 이벤트 연결

### 2. Chip Component

> 화면에 렌더링 해줄 버튼 형태 UI 담당 컴포넌트입니다.

```
import React from '../../lib/react.js';

const { createElement: h } = React;

function Chip({ active = false, text, onChange }) {
  return h(
    'button',
    {
      className: `chip ${active ? 'chip--active' : ''}`,
      role: 'button',
      'aria-pressed': active,
      onClick: () => onChange?.(!active),
    },
    text
  );
}

export default Chip;
```

- 활성 상태(`active`),표시될 텍스트(`text`),상태 변경 감지 함수(`onChange`)총 3가지의 props 전달 받음
- role과 aria-pressed 속성으로 웹 접근성 향상
- `active` 상태에 따른 조건부 스타일링

### 3. App Component

> 상태 관리 및 이벤트 처리를 담당하는 컴포넌트입니다.

```
function Switch({ isOn = false, onChange }) {
  return h(
    'button',
    {
      className: `switch ${isOn ? 'switch--on' : ''}`,
      role: 'switch',
      'aria-checked': isOn,
      onClick: () => onChange?.(!isOn),
    },
    h('img', {
      className: 'switch__knob',
      src: '../assets/knob.svg',
    })
  );
}
```

- `switchState`를 통해 스위치 상태 관리
- `chipStates`를 통해 Chip 컴포넌트별 상태를 따로 관리
- 상태 변경 시 커스텀 이벤트를 통한 리렌더링
- Switch 컴포넌트에 필요한 props 전달
- Chip 컴포넌트 각각 서로 다른 props 전달

### 4. Main

> 페이지 초기 화면, 렌더링, 리렌더링 관리

```
const rootElement = ReactDOM.createRoot(root);

rootElement.render(React.createElement(App));

document.addEventListener('stateChange', () => {
  rootElement.render(React.createElement(App));
});
```

- React Root Element 생성 및 초기 화면 렌더링
- DOM 요소가 존재하는 지 검증 후 초기 화면 렌더링 기능
- 상태 변경 이벤트를 받아 리렌더링 처리

## 🤔 회고
> 일정이 있어 3번까지 완성하여 제출하지 못한 것이 아쉽긴 하지만 배운 내용을 토대로 컴포넌트를 구성했다는 점이 만족스러운 과제였다.<br>
> Chip 컴포넌트를 만들 때 app.ts에서 chipStates만 객체로 관리하는 것이 아닌 text,id 등을 모두 객체에 넣어서 만들었다면 좀 더 코드가 깔끔하지 않았을까라는 아쉬움이 남는다.<br>
> 이번 시간이 끝이 아닌 Chip 데이터 관리 부분 코드 리팩토링과 함께 Profile 컴포넌트도 만들어봐야겠다!

