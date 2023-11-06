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
