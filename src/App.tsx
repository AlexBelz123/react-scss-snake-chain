import { useState } from 'react';
import clsx from 'clsx';
import SomeBlock from './components/SomeBlock';
import Counter from './components/Counter';
import LineGenerator, {
  TDestinationLeft,
  TDestinationRight,
} from './components/LineGenerator/LineGenerator';
import './index.scss';

const ITEMS_TO_SHOW = 5;

interface IDest {
  id: string;
  l: TDestinationLeft | null;
  r: TDestinationRight | null;
}

// fake array
const arrData: number[] = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);

const sliceArray = (step: number, range: number) => {
  let _step = step;

  return (arr: number[]) => {
    const s = _step;
    _step += range;
    return arr.slice(s, s + range);
  };
};

const createLinedArray = (arr: number[], count: number) => {
  const customSlice = sliceArray(0, count);
  const columns = Math.ceil(arr.length / count);

  const twoDArr = Array.from({ length: columns }).map(() => customSlice(arr));
  const lastNotFull = twoDArr[columns - 1].length % count > 0;
  const lastIsOdd = twoDArr.length % 2 > 0;

  const generated2DArr: IDest[][] = [];

  for (let i = 0; i < columns; i++) {
    const currentArr = twoDArr[i];
    const tempArr: IDest[] = [];

    for (let j = 0; j < currentArr.length; j++) {
      const temp: IDest = {
        id: `${Math.random() * 1000 + i}`,
        l: 'left',
        r: 'right',
      };

      // for the first element
      if (j === 0 && (i + 1) % 2 !== 0) {
        temp.l = 'top-left';
      }
      if (j === 0 && (i + 1) % 2 === 0) temp.l = 'bottom-left';

      // for the last element
      if (j + 1 === currentArr.length && (i + 1) % 2 === 0)
        temp.r = 'top-right';
      if (j + 1 === currentArr.length && (i + 1) % 2 !== 0)
        temp.r = 'bottom-right';

      if (j === 0 && i === 0) {
        temp.l = 'left';
        temp.r = 'right';
      } // only for the first element

      if (j + 1 === currentArr.length && i === 0) {
        temp.l = 'left';
        temp.r = 'bottom-right';
      } // only for the last element

      tempArr.push(temp);
    }

    generated2DArr.push(tempArr);
  }

  return { generated2DArr, lastReversed: lastNotFull && !lastIsOdd };
};

function App() {
  const [count, setCount] = useState(ITEMS_TO_SHOW);
  const { generated2DArr, lastReversed } = createLinedArray(arrData, count);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
      <div className="flex-container">
        <div style={{ display: 'inline-block' }}>
          {generated2DArr.map((row, idx) => {
            return (
              <div key={idx} className={clsx('blocks')}>
                {row.map((column, i) => (
                  <SomeBlock key={column.id}>
                    <LineGenerator destLeft={column.l} destRight={column.r} />
                  </SomeBlock>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
