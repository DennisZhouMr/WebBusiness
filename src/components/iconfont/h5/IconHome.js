/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHome = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M558.634667 100.522667l336.874666 295.296A64 64 0 0 1 917.333333 443.946667V896a64 64 0 0 1-64 64H170.666667a64 64 0 0 1-64-64V444.416a64 64 0 0 1 22.4-48.64L474.837333 100.053333a64 64 0 0 1 83.797334 0.490667z m-53.973334 30.336l-2.090666 1.578666L156.8 428.202667a21.333333 21.333333 0 0 0-7.296 13.568L149.333333 444.416V896a21.333333 21.333333 0 0 0 18.837334 21.184L170.666667 917.333333h682.666666a21.333333 21.333333 0 0 0 21.184-18.837333L874.666667 896V443.946667a21.333333 21.333333 0 0 0-5.418667-14.186667l-1.856-1.856L530.517333 132.608a21.333333 21.333333 0 0 0-25.856-1.749333zM544 554.666667v245.205333h-42.666667V554.666667h42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHome.defaultProps = {
  size: 18,
};

export default IconHome;
