import React from '../lib/react.js';
import Switch from './HW1/Switch.ts';
import Chip from './HW1/Chip.ts';

const { createElement: h } = React;

let switchState = false;

let chipStates = {
  comingSoon: false,
  popular: false,
  topTen: false,
};

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
    }),
    h(Chip, {
      active: chipStates.comingSoon,
      text: '공개 예정',
      onChange: () => {
        chipStates.comingSoon = !chipStates.comingSoon;
        document.dispatchEvent(new Event('stateChange'));
      },
    }),
    h(Chip, {
      active: chipStates.popular,
      text: '모두의 인기 텍스트',
      onChange: () => {
        chipStates.popular = !chipStates.popular;
        document.dispatchEvent(new Event('stateChange'));
      },
    }),
    h(Chip, {
      active: chipStates.topTen,
      text: 'Top 10',
      onChange: () => {
        chipStates.topTen = !chipStates.topTen;
        document.dispatchEvent(new Event('stateChange'));
      },
    })
  );
}

export default App;
