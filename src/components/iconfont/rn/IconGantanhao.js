/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconGantanhao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M443.733333 170.666667m68.266667 0l0 0q68.266667 0 68.266667 68.266666l0 409.6q0 68.266667-68.266667 68.266667l0 0q-68.266667 0-68.266667-68.266667l0-409.6q0-68.266667 68.266667-68.266666Z"
        fill={getIconColor(color, 0, '#FDD000')}
      />
      <Path
        d="M512 819.2m-68.266667 0a68.266667 68.266667 0 1 0 136.533334 0 68.266667 68.266667 0 1 0-136.533334 0Z"
        fill={getIconColor(color, 1, '#FDD000')}
      />
    </Svg>
  );
};

IconGantanhao.defaultProps = {
  size: 18,
};

export default IconGantanhao;
