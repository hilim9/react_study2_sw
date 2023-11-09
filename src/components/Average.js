import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균 구하는 함수 호출');
  const total = numbers.reduce((a, b) => a + b, 0);
  console.log(total, numbers.length);
  const avg = Math.round((total / numbers.length) * 10) / 10; // 100 두번째 자리

  return avg;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(0);

  // [] 빈 값 -> 처음 마운트 될 때 1번만 생성
  const handleChange = useCallback((e) => setNumber(e.currentTarget.value), []);
  //const handleClick = useCallback(
  // () => setList(list.concat(Number(number))),
  // [list, number],
  //);
  const handleClick = useCallback(
    () => setList((list) => list.concat(Number(number))),
    [number],
  );
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input type="number" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        평균 구하기
      </button>
      <ul>
        {list.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <div>평균 : {avg}</div>
    </>
  );
};

export default React.memo(Average);
