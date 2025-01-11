import React from '../lib/react.js';
import Box from './box';

const { createElement: h } = React;

function App() {
  return h(
    'div',
    {
      className: 'app',
    },
    // h(Calculators)
    h(Box, null, '기본 박스')
  );
}
export default App;
