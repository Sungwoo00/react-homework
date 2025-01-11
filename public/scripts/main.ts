import App from '../components/app.ts';
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

const root = document.getElementById('react');

if (!root) {
  alert('문서에 #react 요소가 존재하지 않습니다.');
}

ReactDOM.createRoot(root).render(React.createElement(App));
