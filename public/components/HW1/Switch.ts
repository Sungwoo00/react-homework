import React from '../../lib/react.js';

const { createElement: h } = React;

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

export default Switch;
