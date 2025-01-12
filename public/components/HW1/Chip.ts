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
