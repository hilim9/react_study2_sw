import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LoginForm = () => {
  const { t, i18n } = useTranslation(); // t : Translation
  const [language, setLanguage] = useState('한국어');

  const handleLanguage = (e) => {
    console.log('클릭!');
    const el = e.currentTarget;
    const lang = el.dataset.lang;
    i18n.changeLanguage(lang);
    setLanguage(lang === 'ko' ? '한국어' : 'English');
  };

  return (
    <>
      <h1>{t('로그인')}</h1>
      <div>
        {t('현재 언어')}: {language}
      </div>
      <form>
        <input type="text" name="userId" placeholder={t('아이디')} />
        <input type="password" name="userPw" placeholder={t('비밀번호')} />
        <button type="submit">{t('로그인')}</button>
      </form>
      <button type="button" onClick={handleLanguage} data-lang="ko">
        한국어
      </button>
      <button type="button" onClick={handleLanguage} data-lang="en">
        English
      </button>
    </>
  );
};

export default LoginForm;
