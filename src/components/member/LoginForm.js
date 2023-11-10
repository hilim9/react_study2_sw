import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../components/commons/TitleStyle';
import { InputText } from '../../components/commons/InputStyle';

const LoginForm = ({ onSubmit, onChange, form, error }) => {
  const { t } = useTranslation();

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
