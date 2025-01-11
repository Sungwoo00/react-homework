import React from '../lib/react.js';

interface BoxProps {
  // 필수(required)
  children: React.ReactNode;
  // 선택 (optional)
  size?: 'small' | 'big';
  style?: Record<string, string | number>;
  className?: string;
}

function Box({ className = '', children, size, style, ...restProps }: BoxProps) {
  return React.createElement(
    'div',
    {
      className: `box ${size ? `box--${size}` : ''} ${className}`,
      style: { backgroundColor: '#171c28', ...style },
      ...restProps,
    },
    children
  );
}
export default Box;
