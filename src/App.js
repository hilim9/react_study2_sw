import LoginContainer from './containers/member/LoginContainer';

const App = () => {
  return <LoginContainer />;
};

export default App;

/*
import LifeCycle from './components/LifeCyle';
import ErrorBoundary from './components/ErrorBoundary';
import { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    // visible이 있을 때만 보여줌
    <>
      <ErrorBoundary>
      {visible && <LifeCycle color="orange" number={10} />}
      <button type="button" onClick={handleClick}>
        Toggle
      </button>
      </ErrorBoundary>
    </>
  );
};

export default App;
*/
