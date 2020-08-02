/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1673 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M413.492323 948.053239H141.507106a15.74487 15.74487 0 0 1-15.838497-14.761791v-246.549996a38.012392 38.012392 0 0 0-67.09905-20.722684 38.121623 38.121623 0 0 0-8.660458 21.721367V938.518932a85.590299 85.590299 0 0 0 85.41865 85.465464h276.604129a37.450632 37.450632 0 0 0 34.438977-37.294588 36.623598 36.623598 0 0 0-32.878534-38.636569z"
        fill={getIconColor(color, 0, '#14100E')}
      />
      <Path
        d="M1022.876528 283.101657a86.027223 86.027223 0 0 0-5.88287-27.214126l0.811431-0.967475-3.635833-6.241772a100086.190704 100086.190704 0 0 1-119.23345-204.074737C882.09336 20.401076 866.957063 0.318174 811.57694 0.318174H211.524184a88.30547 88.30547 0 0 0-86.479752 48.545382l-112.351897 196.132083-1.357586 3.292535v0.202857a87.384809 87.384809 0 0 0-9.253427 34.563813L1.956687 436.50881a39.011075 39.011075 0 0 0 0 19.926857v15.058275h7.708588a39.338768 39.338768 0 0 0 30.210177 14.262449h116.440258a39.198328 39.198328 0 1 0-0.343298-78.381052H75.437948l0.858244-120.949938a13.263766 13.263766 0 0 1 13.326183-12.920468h843.466262a16.462674 16.462674 0 0 1 15.791684 12.57717v127.129293a39.011075 39.011075 0 0 0 38.620964 34.033262h0.374507a35.375243 35.375243 0 0 0 35.328429-35.281617v-125.974564z"
        fill={getIconColor(color, 1, '#14100E')}
      />
      <Path
        d="M986.377766 489.126948H523.597182a36.904477 36.904477 0 0 0-36.904477 36.904478v448.440113a36.904477 36.904477 0 0 0 73.808954 0V562.935903h388.97163v411.535636a36.904477 36.904477 0 0 0 73.808955 0V526.031426a36.920082 36.920082 0 0 0-36.904478-36.904478z"
        fill={getIconColor(color, 2, '#229E8E')}
      />
      <Path
        d="M826.447962 937.504644h-142.93658a36.904477 36.904477 0 1 0 0 73.808954h142.93658a36.904477 36.904477 0 0 0 0-73.808954z"
        fill={getIconColor(color, 3, '#229E8E')}
      />
    </Svg>
  );
};

IconZu1673.defaultProps = {
  size: 18,
};

export default IconZu1673;