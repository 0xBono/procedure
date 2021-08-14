import React from 'react';
import classNames from 'classnames/bind';
import styles from './Callout.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export const Callout: React.FC<Props> = ({ title, content, children }) => {
  return (
    <div className={cx('callout-wrap')}>
      <p className={cx('callout-title')}>{title}</p>
      <p className={cx('callout-content')}>{content}</p>
      {children}
    </div>
  );
};

Callout.defaultProps = {
  title: '타이틀을 입력해주세요.',
  content: '설명문구가 들어가는 자리입니다',
};
