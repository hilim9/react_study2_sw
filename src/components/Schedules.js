import { useState, useRef } from 'react';

const initialForm = {
  id: 0,
  date: '',
  content: '',
};

const Schedules = () => {
  let id = useRef(4);
  // let id = 10;

  const [schedules, setSchedules] = useState([
    {
      id: 1,
      date: '2023/11/04',
      content: '스케줄1',
    },
    {
      id: 2,
      date: '2023/11/05',
      content: '스케줄2',
    },
    {
      id: 3,
      date: '2023/11/06',
      content: '스케줄3',
    },
  ]);

  const [form, setForm] = useState(initialForm);

  /*
  const [date, setDate] = useState('');
  const [content, setContent] = useState(''); */

  const handleSubmit = (e) => {
    e.preventDefault();
    form.id = id.current++;
    //schedules.push(form); // push: 원본 데이터만 변경 (주소가 변경되지 않는다-> 렌더링이 X)

    setSchedules(schedules.concat(form)); // 배열 concat 메서드 -> 추가하고 새로운 객체 반환
    setForm(initialForm);
    //console.log('제출!');
    //console.log(date, content);
  };

  const handleChange = (e) => {
    form[e.currentTarget.name] = e.currentTarget.value;
    //setForm(form); // 얕은 복사: 주소값이 바뀌지 않기 때문에 갱신하지 않는다(주소값이 변경되야 렌더링 됨)
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value }); // 전개 연산자 (...) -> 깊은 복사
  };

  return (
    <>
      <h1>스케줄 등록</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="date"
          placeholder="날짜"
          onChange={handleChange}
          value={form.date}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={handleChange}
          value={form.content}
        />
        <button type="submit">등록하기</button>
      </form>
      <hr />
      <ul>
        {schedules.map((s) => (
          <li key={s.id}>
            {s.date}/{s.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Schedules;
