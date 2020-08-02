/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconWechat = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M319.247059 385.505882a33.460706 33.460706 0 1 0 16.233412-30.117647 33.460706 33.460706 0 0 0-16.233412 30.117647z m149.744941-0.963764a33.581176 33.581176 0 1 0 33.581176-32.075294 33.520941 33.520941 0 0 0-33.581176 32.075294z m83.847529 149.955764a23.311059 23.311059 0 1 0 11.264-21.082353 23.280941 23.280941 0 0 0-11.264 21.082353z m118.211765 1.897412a23.311059 23.311059 0 1 0 23.280941-23.280941 23.250824 23.250824 0 0 0-23.280941 23.280941zM512 0a512 512 0 1 0 512 512A511.698824 511.698824 0 0 0 512 0z m-87.341176 630.211765a351.623529 351.623529 0 0 1-75.294118-11.14353l-75.294118 37.25553 21.413647-64.271059a174.351059 174.351059 0 0 1-85.62447-145.257412c0-102.4 96.768-182.422588 215.04-182.422588 105.140706 0 198.264471 64.271059 216.847059 150.799059a155.346824 155.346824 0 0 0-20.48-0.90353 175.736471 175.736471 0 0 0-182.482824 170.37553 173.236706 173.236706 0 0 0 6.535529 44.66447c-7.469176 0-13.944471 0.903529-20.48 0.90353z m314.639058 75.294117l15.811765 54.031059-58.639059-32.587294a259.975529 259.975529 0 0 1-64.240941 11.203765c-102.4 0-182.422588-69.812706-182.422588-155.52753s79.992471-155.437176 182.422588-155.437176c96.828235 0 182.452706 69.812706 182.452706 155.497412a161.882353 161.882353 0 0 1-75.294118 122.88z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWechat.defaultProps = {
  size: 18,
};

export default IconWechat;