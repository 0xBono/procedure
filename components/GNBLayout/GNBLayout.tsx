import { Header } from 'components';
import className from 'classnames/bind';
import styles from './GNBLayout.module.scss';

const cx = className.bind(styles);

interface Props {
  children: React.ReactNode;
}

export const GNBLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className={cx('main')}>
      <Header />
      {children}
    </main>
  );
};
