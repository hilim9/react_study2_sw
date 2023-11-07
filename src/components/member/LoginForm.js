import { useTranslation } from 'react-i18next';

const LoginForm = ({ onSubmit, onChange, form, error }) => {
  const { t } = useTranslation(); // t : Translation

  return (
    <>
      <h1>{t('로그인')}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder={t('이메일')}
          onChange={onChange}
          value={form.email}
        />
        {error.email && <div>{error.email}</div>}

        <input
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
