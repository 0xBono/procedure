import { memo, useCallback, forwardRef, FocusEvent, ChangeEvent, KeyboardEvent, InputHTMLAttributes } from 'react';

import classNames from 'classnames/bind';
import styles from './TextField.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
  fullSize?: boolean;
}

type Props = BaseProps & InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ type, className, disabled, fullSize, onBlur, onChange, onKeyUp, ...rest }, ref) => {
    const classes = cx('input', className, {
      disabled,
      fullSize,
    });

    const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => onBlur && onBlur(e), [onBlur]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e), [onChange]);

    const handleKeyUp = useCallback((e: KeyboardEvent<HTMLInputElement>) => onKeyUp && onKeyUp(e), [onKeyUp]);

    return (
      <input
        ref={ref}
        className={classes}
        type={type}
        disabled={disabled}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        {...rest}
      />
    );
  },
);

TextField.defaultProps = {
  type: 'text',
};

export default memo(TextField);
