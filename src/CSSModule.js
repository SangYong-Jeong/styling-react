import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(' ')}>
    // <div className={cx('wrapper')}>
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;

// CSS파일 내에서 아래에 있는 CSS가 위의 CSS를 덮어쓴다.
// 일반 css나 scss 파일에서는 적용이 :local이 적용 안되는것같다. module을 붙여서 사용해야 할듯
// ** 기본값 :local , 전역으로 설정하고 싶은 값 :global
