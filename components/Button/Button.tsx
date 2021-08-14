import { ButtonHTMLAttributes, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
  fullSize?: boolean;
}

export type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ fullSize, disabled, className, children, ...rest }) => {
  const classes = cx('button', className, {
    disabled,
    fullSize,
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default memo(Button);
