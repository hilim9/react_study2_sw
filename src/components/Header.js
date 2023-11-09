import styles from '../styles/header.module.scss';
import classNames from 'classnames';

console.log(styles);

const Header = () => {
  return (
    <div className={styles.header}>
      <button type="button" className={classNames('red', 'cls1', 'cls2')}>
        로그인
      </button>
      <button type="button">회원가입</button>
    </div>
  );
};

export default Header;
