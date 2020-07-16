/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLujing1425 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M889.369171 215.588078H799.993722c33.396846-26.314885 62.420078-62.218782 62.420077-107.803189 0-53.892445-59.272539-102.477993-134.721961-107.784889h-16.158584c-113.933569 0-171.119949 83.373167-199.466094 157.376918C483.721016 83.354868 426.662733 0 312.692565 0h-16.158584c-75.449422 5.398394-134.740261 53.892445-134.740261 107.784889 0 45.621007 29.023232 81.470004 62.438377 107.803189H134.893247a134.776861 134.776861 0 0 0-26.955372 266.827074v406.837633a133.422687 133.422687 0 0 0 134.740261 134.740261h538.942746a133.422687 133.422687 0 0 0 134.740261-134.740261V482.470051a134.776861 134.776861 0 0 0-26.955372-266.827074z m-177.835917-161.695633h10.778489c53.892445 5.398394 86.227911 32.335467 86.227911 53.892444 0 53.892445-80.829517 91.626306-118.563378 107.803189h-145.51875c21.538678-64.689233 64.652634-161.695633 167.057428-161.695633zM215.722764 107.784889c0-21.556978 32.335467-48.49405 86.227911-53.892444h10.778489c107.784889 0 145.51875 96.988101 167.075728 161.695633h-145.51875c-37.752161-16.176883-118.581678-53.910744-118.581678-107.803189z m269.462223 862.315713H242.641537a82.897377 82.897377 0 0 1-80.847817-80.847817V485.050301h323.372967z m377.247112-80.847817a82.879077 82.879077 0 0 1-80.829517 80.847817H539.059132V485.050301h323.354667z m26.955372-458.094929H134.893247a80.847817 80.847817 0 1 1 0-161.677334h754.512524a80.847817 80.847817 0 1 1 0 161.677334z"
        fill={getIconColor(color, 0, '#229E8E')}
      />
    </Svg>
  );
};

IconLujing1425.defaultProps = {
  size: 18,
};

export default IconLujing1425;
