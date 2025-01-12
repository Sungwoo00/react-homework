# UI 컴포넌트

> 해당 과제는 React DOM API를 사용하여 구현하였습니다.

## 컴포넌트 구조 및 기능

1. Switch Component
   > 화면에 렌더링을 해줄 UI를 담당하는 컴포넌트입니다.

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
- 상태 따라서 다른 클래스를 적용하여 조건부 스타일링
- 클릭 이벤트 연결

2. App Component
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
- 상태 변경 시 커스텀 이벤트를 통한 리렌더링
- Switch 컴포넌트에 필요한 props 전달

3. Main
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
