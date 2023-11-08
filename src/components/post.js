import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  //const [number, setNumber] = useState(0);
  //const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    //if (refresh) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error(err));

    return () => {
      // 뒷정리 함수 -> 업데이트 전, 언마운트 전에 호출
      console.log('뒷정리 함수 호출');
    };

    //}
  }, []); // 값이 비어 있으면 처음 마운트 될때만 호출 (refresh 적용 안했을 때)

  return (
    <ul>
      {posts.length > 0 && posts.map((p) => <li key={p.id}>{p.title}</li>)}
    </ul>

    /*
      <h1>{number}</h1>
      <button type="button" onClick={() => setNumber(number + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setRefresh(true)}>
        새로고침
      </button>
    */
  );
};

export default Posts;
