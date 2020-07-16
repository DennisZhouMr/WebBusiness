/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconCalendar = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M742.83575 169.769061a24.420956 24.420956 0 0 0 26.91732-20.595007V20.529884a27.83989 27.83989 0 0 0-53.753238 0v128.562767a24.420956 24.420956 0 0 0 26.835918 20.67641z"
        fill={getIconColor(color, 0, '#434343')}
      />
      <path
        d="M281.035467 169.850464a24.420956 24.420956 0 0 0 26.835918-20.595006V20.611287a27.812756 27.812756 0 0 0-53.753238 0v128.535633a24.420956 24.420956 0 0 0 26.91732 20.703544z"
        fill={getIconColor(color, 1, '#434343')}
      />
      <path
        d="M717.817837 386.301539a32.886888 32.886888 0 0 0-25.424929 12.047672l-238.402802 273.596113-122.620335-140.773245a32.805485 32.805485 0 0 0-50.985529 0 45.829995 45.829995 0 0 0 0 58.447488l148.126666 169.942721a32.832619 32.832619 0 0 0 50.849858 0l263.909134-302.792723a45.694323 45.694323 0 0 0 0-58.447488 32.859753 32.859753 0 0 0-25.452063-12.020538z"
        fill={getIconColor(color, 2, '#434343')}
      />
      <path
        d="M886.648047 64.324799h-89.217893v71.200654a56.683753 56.683753 0 0 1-112.336399 0V64.324799H338.668924v71.200654a56.656618 56.656618 0 0 1-112.254996 0V64.324799H137.196035A103.110704 103.110704 0 0 0 28.088629 159.593662v768.961643a102.947898 102.947898 0 0 0 109.107406 95.268864h749.452012a103.110704 103.110704 0 0 0 109.107406-95.268864V159.675066a103.110704 103.110704 0 0 0-109.107406-95.350267z m37.988155 849.740739a35.030505 35.030505 0 0 1-37.988155 30.770405H137.033229a34.976236 34.976236 0 0 1-37.988155-30.824674V334.176365h825.699665v579.834904z"
        fill={getIconColor(color, 3, '#434343')}
      />
    </svg>
  );
};

IconCalendar.defaultProps = {
  size: 18,
};

export default IconCalendar;