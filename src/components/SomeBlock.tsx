import React, { FC } from 'react';

export const randomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

interface SomeBlockProps {
  children?: React.ReactNode;
}
const SomeBlock: FC<SomeBlockProps> = ({ children }) => {
  const background = `#${randomColor()}`;

  return (
    <div
      style={{
        width: '4rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{ background: background, width: '2rem', height: '2rem' }}
      ></div>
      {children}
    </div>
  );
};

export default SomeBlock;
