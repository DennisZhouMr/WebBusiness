/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconXiaoshoujine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1019.928857 759.36676a491.345381 491.345381 0 0 0-17.26648-109.332655 507.145839 507.145839 0 0 0-248.86536-318.029015 535.326037 535.326037 0 0 0-31.242555-15.865614l-15.76788-7.623314a36.259608 36.259608 0 0 1-17.820311-45.186053 32.350216 32.350216 0 0 1 10.913719-15.702723c6.678544-6.287605 2.475948-2.410792 4.007126-3.844235l3.257827-2.9972a29.906847 29.906847 0 0 1 1.922117-1.628914 285.353016 285.353016 0 0 0 32.578265-35.83609 160.350216 160.350216 0 0 0 22.804784-40.331891 287.53576 287.53576 0 0 0 8.82871-28.571138l2.052431-7.297531a102.784424 102.784424 0 0 0-0.553831-44.762535 55.383049 55.383049 0 0 0-19.31891-26.681599 93.141257 93.141257 0 0 0-47.271062-21.664545 111.971494 111.971494 0 0 0-56.360397 8.959022h-0.228048a35.836091 35.836091 0 0 1-46.9127-7.786205 141.096462 141.096462 0 0 0-185.696106-1.107661 43.003309 43.003309 0 0 1-21.273607 11.011454 41.928226 41.928226 0 0 1-26.909646-3.257827 95.454314 95.454314 0 0 0-29.059811-7.851361 105.29295 105.29295 0 0 0-31.666073 1.759226 83.204887 83.204887 0 0 0-49.388649 28.766607A61.116824 61.116824 0 0 0 248.377826 111.124459a212.996691 212.996691 0 0 0 18.080937 62.941207 210.683635 210.683635 0 0 0 36.715704 54.373122c5.147366 5.538305 9.773479 10.32731 14.790532 15.21405l7.721048 7.721048A36.22703 36.22703 0 0 1 315.326159 309.49351l-1.368287 0.651565-5.375413 2.378213h-0.162892A512.912191 512.912191 0 0 0 4.920458 744.608806a523.760753 523.760753 0 0 0 0 78.383304 426.482057 426.482057 0 0 0 12.77068 76.298295 167.97353 167.97353 0 0 0 59.781114 89.883431 164.389921 164.389921 0 0 0 101.220667 34.370068q180.74421-0.390939 361.618733-0.195469h306.235683a163.249682 163.249682 0 0 0 77.047595-17.950624 171.850344 171.850344 0 0 0 59.813693-54.438279 147.025706 147.025706 0 0 0 18.667345-36.813439 256.130313 256.130313 0 0 0 10.555358-43.589717 546.174599 546.174599 0 0 0 7.297531-111.189616z m-378.103334 41.895648h-116.955968v39.712904a31.307712 31.307712 0 0 1-62.615424 0v-39.712904h-109.202342a31.307712 31.307712 0 0 1 0-62.615424h109.202342v-47.824892h-95.682362a31.307712 31.307712 0 0 1 0-62.615424h95.682362v-35.217103l-118.291677-118.291677a31.307712 31.307712 0 1 1 44.273861-44.273862l105.292949 105.325529 105.325529-105.325529a31.307712 31.307712 0 0 1 44.273861 44.273862l-118.291678 118.291677v35.217103h103.435989a31.307712 31.307712 0 0 1 0 62.615424h-103.435989v47.85747h116.955969a31.307712 31.307712 0 0 1 0 62.615424z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </Svg>
  );
};

IconXiaoshoujine.defaultProps = {
  size: 18,
};

export default IconXiaoshoujine;