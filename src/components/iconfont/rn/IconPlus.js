/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPlus = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M856.576 557.568H167.424c-22.528 0-41.472-18.432-41.472-41.472v-8.192c0-22.528 18.432-41.472 41.472-41.472h688.64c22.528 0 41.472 18.432 41.472 41.472v8.192c0 22.528-18.432 41.472-40.96 41.472z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M557.568 167.424v688.64c0 22.528-18.432 41.472-41.472 41.472h-8.192c-22.528 0-41.472-18.432-41.472-41.472V167.424c0-22.528 18.432-41.472 41.472-41.472h8.192c22.528 0.512 41.472 18.944 41.472 41.472z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPlus.defaultProps = {
  size: 18,
};

export default IconPlus;
