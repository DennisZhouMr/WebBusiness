/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLocation = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M829.351722 131.584595a448.803985 448.803985 0 0 0-634.667226 0c-175.26337 175.26337-196.463111 423.400848 0 634.667226a2081.777948 2081.777948 0 0 0 248.502991 234.522127 113.400335 113.400335 0 0 0 137.569866 0 2076.569391 2076.569391 0 0 0 248.594369-234.567816c196.5088-211.357756 175.217681-459.495234 0-634.621537z m-317.356457 458.764208a153.926563 153.926563 0 1 1 153.926562-153.972252A153.926563 153.926563 0 0 1 511.949575 590.166047z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M511.949575 329.738202a111.527082 111.527082 0 1 0 0 223.054165 111.527082 111.527082 0 1 0 0-223.054165z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconLocation.defaultProps = {
  size: 18,
};

export default IconLocation;
