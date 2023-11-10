import Login from './pages/member/Login';
import Join from './pages/member/Join';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import CommonLayout from './layouts/CommonLayout';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
