import React, { FC } from 'react';

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: FC<CounterProps> = ({ count, setCount }) => {
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div>
        Items to show: <span className="count">{count}</span>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
