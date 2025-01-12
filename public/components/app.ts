import React from '../lib/react.js';
import Switch from './HW1/Switch.ts';

const { createElement: h } = React;

let switchState = false;

function App() {
  return h(
    'div',
    {
      className: 'app',
    },
    h(Switch, {
      isOn: switchState,
      onChange: () => {
        switchState = !switchState;
        document.dispatchEvent(new Event('stateChange'));
      },
    })
  );
}

export default App;
