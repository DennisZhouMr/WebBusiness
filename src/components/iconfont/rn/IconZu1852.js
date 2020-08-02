/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconZu1852 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M877.794728 131.746883h-155.856292V84.483462A86.032674 86.032674 0 0 0 634.697876 0.009351h-245.473661a86.032674 86.032674 0 0 0-87.24056 84.474111v47.263421h-155.856292a81.1232 81.1232 0 0 0-82.370051 79.486709v51.198792a81.162164 81.162164 0 0 0 82.292123 79.720494h2.532664v550.874066a133.25713 133.25713 0 0 0 135.244298 130.919286h456.152405a133.25713 133.25713 0 0 0 135.244297-130.919286V342.152878h2.493701a81.162164 81.162164 0 0 0 82.214194-79.720494V211.233592a81.201128 81.201128 0 0 0-82.136266-79.486709zM369.46943 64.884533a27.74242 27.74242 0 0 1 19.910641-7.792814h245.473661a27.74242 27.74242 0 0 1 19.910642 7.792814 27.820348 27.820348 0 0 1 8.494168 19.482037v47.26342H361.131118V84.36657a27.859312 27.859312 0 0 1 8.338312-19.482037z m446.917919 828.298267a75.239625 75.239625 0 0 1-76.369583 74.031739H283.865361a75.278589 75.278589 0 0 1-76.369583-74.031739V342.659411h608.891571zM901.406957 262.783061h-0.272749a22.871911 22.871911 0 0 1-7.013533 16.17009 22.910875 22.910875 0 0 1-16.403875 6.468036H146.361147a23.027767 23.027767 0 0 1-16.403875-6.468036 23.378444 23.378444 0 0 1-7.013533-16.17009V211.545304a23.378444 23.378444 0 0 1 7.013533-16.17009 23.027767 23.027767 0 0 1 16.403875-6.468036h731.628402a22.988803 22.988803 0 0 1 16.403874 6.468036 23.066731 23.066731 0 0 1 7.013534 16.17009z"
        fill={getIconColor(color, 0, '#434343')}
      />
      <Path
        d="M322.946327 431.107857h59.342283v441.229164H322.946327z"
        fill={getIconColor(color, 1, '#434343')}
      />
      <Path
        d="M482.309386 431.107857h59.342283v441.229164h-59.342283z"
        fill={getIconColor(color, 2, '#434343')}
      />
      <Path
        d="M641.828301 431.107857h59.342284v441.229164h-59.342284z"
        fill={getIconColor(color, 3, '#434343')}
      />
    </Svg>
  );
};

IconZu1852.defaultProps = {
  size: 18,
};

export default IconZu1852;
