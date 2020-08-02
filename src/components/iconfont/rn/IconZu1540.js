/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1540 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888.277435 359.654502A377.725198 377.725198 0 0 0 523.106422 0.164946a376.57058 376.57058 0 0 0-214.429152 693.41256 71.091511 71.091511 0 0 1 30.294991 75.74664l-8.375566 41.382993a29.635208 29.635208 0 1 0 58.060816 11.839422l8.302257-40.778193a130.526873 130.526873 0 0 0-56.191434-138.022731 317.428454 317.428454 0 1 1 341.89537 0.329891 129.5372 129.5372 0 0 0-55.769907 137.106367l8.375566 41.382993a29.745172 29.745172 0 0 0 29.012081 23.697171 37.314338 37.314338 0 0 0 6.011347-0.513164 29.708518 29.708518 0 0 0 23.110698-34.950119l-8.540512-41.969467a70.468384 70.468384 0 0 1 29.708518-74.811948 378.366653 378.366653 0 0 0 173.70594-334.362859z"
        fill={getIconColor(color, 0, '#229E8E')}
      />
      <Path
        d="M634.737872 964.711256H389.317293a29.616881 29.616881 0 1 0 0 59.233762h245.420579a29.616881 29.616881 0 1 0 0-59.233762z"
        fill={getIconColor(color, 1, '#229E8E')}
      />
      <Path
        d="M634.737872 863.196463h-93.469118a31.339645 31.339645 0 0 0 0.329891-4.233601v-84.617042a29.635208 29.635208 0 0 0-59.252089 0v84.617042a31.3763 31.3763 0 0 0 0.329891 4.233601h-93.469118a29.616881 29.616881 0 1 0 0 59.233763h245.420579a29.616881 29.616881 0 1 0 0-59.233763z"
        fill={getIconColor(color, 2, '#229E8E')}
      />
      <Path
        d="M529.209406 155.268699a29.525245 29.525245 0 0 0-39.531939 13.80044l-102.74272 213.347842a40.210048 40.210048 0 0 0 36.214701 57.639289h146.838151l-80.145186 160.18041a29.69019 29.69019 0 1 0 53.149106 26.501244l93.890644-187.726308a40.191721 40.191721 0 0 0-35.976446-58.134126h-147.296333l89.437116-186.021871a29.580227 29.580227 0 0 0-13.837094-39.58692z"
        fill={getIconColor(color, 3, '#229E8E')}
      />
    </Svg>
  );
};

IconZu1540.defaultProps = {
  size: 18,
};

export default IconZu1540;
