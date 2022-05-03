import React from 'react';

export const randomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const SomeBlock = () => {
  const background = `#${randomColor()}`;

  return (
    <div
      style={{ width: '2rem', height: '2rem', background: background }}
    ></div>
  );
};

export default SomeBlock;
