import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../components/commons/TitleStyle';
import { InputText } from '../commons/InputStyle';
//import styled, { css } from 'styled-components';
/*
const darkModeCss = css`
  background: #000;
  color: #fff;
`;

const TitleStyle = styled.h1`
  border-bottom: 2px solid #000;
  font-size: 1.75rem;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: ${(props) => props.color || 'black'};

  span {
    border: 2px solid red;
  }

  ${(props) => props.theme === 'dark' && darkModeCss}
`; */

const LoginForm = ({ onSubmit, onChange, form, error }) => {
  const { t } = useTranslation(); // t : Translation

  return (
    <>
      <MainTitle>{t('로그인')}</MainTitle>

      <form onSubmit={onSubmit}>
        <InputText
          type="text"
          name="email"
          placeholder={t('이메일')}
          onChange={onChange}
          value={form.email}
        />
        {error.email && <div>{error.email}</div>}

        <InputText
          type="password"
          name="password"
          placeholder={t('비밀번호')}
          onChange={onChange}
          value={form.password}
        />
        {error.password && <div>{error.password}</div>}

        <button type="submit">{t('로그인')}</button>
      </form>
    </>
  );
};

export default LoginForm;

/*
import { useTranslation } from 'react-i18next';
import MainTitle from '../commons/MainTitle';

const LoginForm = () => {
  const { t } = useTranslation(); // t : Translation

  return (
    <>
      <MainTitle>{t('로그인')}</MainTitle>

      <form>
        <input type="text" name="userId" placeholder={t('아이디')} />

        <input type="password" name="userPw" placeholder={t('비밀번호')} />
        <button type="submit">{t('로그인')}</button>
      </form>
    </>
  );
};

export default LoginForm;
*/
