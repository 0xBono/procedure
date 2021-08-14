import { useState, useCallback } from 'react';
import { Carousel, TextField, Button, Callout, GNBLayout } from 'components';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

export const Main = () => {
  const [isCompany, setIsCompany] = useState(false);

  const handleHelpToggle = useCallback(() => {
    setIsCompany(true);
  }, []);
  return (
    <GNBLayout>
      <div className={cx('wrap')}>
        <section className={cx('hero-section')}>
          <h2 className={cx('h2')}>회사 채용 절차가 궁금하면</h2>
          <h1 className={cx('h1')}>우리도 절차 있는 회사</h1>
        </section>
        <Carousel />
        <section className={cx('search-section')}>
          <h1 className={cx('h1')}>지금 바로 이용해보세요!</h1>
          <TextField className={cx('search-input')} placeholder="기업 이름을 입력해보세요!" fullSize />
          <Button className={cx('search-button')}>3초만에 검색하기</Button>
        </section>
        <section className={cx('more-section')}>
          <h3 className={cx('h3')} role="button" tabIndex={0} onClick={handleHelpToggle} onKeyPress={handleHelpToggle}>
            찾으시는 회사가 없으신가요?
          </h3>
          {isCompany && (
            <Callout
              title="찾으시는 회사가 없다니..🤯"
              content="찾으시려는 회사가 없으셔서 몹시 불편하셨을 거라 생각됩니다. 잠시 귀중한 시간을 내주시어 좋은 서비스를 만드는 것에 동참해주시겠어요?"
            >
              <Button className={cx('more-button')}>서비스 도움주기</Button>
            </Callout>
          )}
        </section>
      </div>
    </GNBLayout>
  );
};
