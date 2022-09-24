import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    medium = '500',
    bold = '700',
    lineHeight,
    href,
    center,
    className,
    children,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    style[medium],
    style[bold],
    style[lineHeight],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fst${dsize}`]]: dsize},
  );

  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  meduim: PropTypes.number,
  bold: PropTypes.number,
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};
