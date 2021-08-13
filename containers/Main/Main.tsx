import { Carousel } from 'components';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

export const Main = () => {
  return (
    <section className={cx('wrap')}>
      <Carousel />
    </section>
  );
};
