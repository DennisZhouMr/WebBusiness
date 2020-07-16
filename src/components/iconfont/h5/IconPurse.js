/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPurse = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1007.419029 297.510322a121.400901 121.400901 0 0 0-119.468659-123.002844h-38.66134V58.391339a60.857342 60.857342 0 0 0-62.211562-58.363594h-551.597073a59.932508 59.932508 0 0 0-62.211562 58.363594v116.116139h-37.323635a121.400901 121.400901 0 0 0-119.452144 123.002844v603.453804a121.400901 121.400901 0 0 0 119.452144 123.019359h751.988657a122.21013 122.21013 0 0 0 119.468659-124.439639v-78.264028a36.547435 36.547435 0 1 0-73.045325 0v78.264028a46.621513 46.621513 0 0 1-46.406819 47.893159H135.978228a46.621513 46.621513 0 0 1-46.406819-47.893159V297.510322a46.621513 46.621513 0 0 1 46.406819-47.79407h751.988657a46.621513 46.621513 0 0 1 46.406819 47.79407v69.725834a36.547435 36.547435 0 1 0 73.045325 0zM214.704673 58.391339c0-8.554709 9.677721-15.656109 20.726177-15.656108h551.597073c11.064971 0 20.726177 7.101399 20.726178 15.656108v116.116139H214.770732z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M378.548821 505.350117v187.873303a80.377933 80.377933 0 0 0 80.311874 80.311873h540.036655v-348.464019h-540.036655a80.377933 80.377933 0 0 0-80.311874 80.278843z m545.123239 191.572637H458.860695a5.68112 5.68112 0 0 1-5.086584-5.103099V505.350117a5.664605 5.664605 0 0 1 5.086584-5.086583h464.811365z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M225.191623 599.253739a46.968326 46.968326 0 1 0 46.968326-46.968326 46.968326 46.968326 0 0 0-46.968326 46.968326z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M724.073191 101.098825H298.517701a21.353743 21.353743 0 1 0 0 42.690972h425.538976a20.957386 20.957386 0 0 0 21.353743-21.353743 21.882219 21.882219 0 0 0-21.337229-21.337229z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconPurse.defaultProps = {
  size: 18,
};

export default IconPurse;
