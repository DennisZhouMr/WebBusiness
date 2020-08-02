/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu1598 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M413.475607 948.026391H141.466469a15.745826 15.745826 0 0 1-15.844237-14.761711V686.744097a38.011407 38.011407 0 0 0-67.091979-20.715601 38.109819 38.109819 0 0 0-8.660204 21.724318v250.776876a85.593324 85.593324 0 0 0 85.421104 85.47031h276.659077a37.470144 37.470144 0 0 0 34.443993-37.297924 36.609045 36.609045 0 0 0-32.918616-38.675685z"
        fill={getIconColor(color, 0, '#14100E')}
      />
      <path
        d="M1022.839058 283.011287a86.109984 86.109984 0 0 0-5.880081-27.210755l0.811894-0.959511-3.641223-6.175316a88422.282977 88422.282977 0 0 1-119.225423-204.080662c-12.842689-24.209207-27.973443-44.285135-83.354464-44.285134H211.486187a88.324241 88.324241 0 0 0-86.479026 48.541428L12.695139 244.975277l-1.353157 3.296782v0.196823a87.315524 87.315524 0 0 0-9.250673 34.567008l-0.123014 153.447991a39.06933 39.06933 0 0 0 0 19.928311v15.056946h7.700693a39.364564 39.364564 0 0 0 30.212303 14.269654h116.445301a39.192344 39.192344 0 1 0-0.34444-78.384688H75.457016l0.861099-120.947623a13.260938 13.260938 0 0 1 13.334747-12.916498H933.112455a16.459308 16.459308 0 0 1 15.795031 12.572058v127.122939a39.044727 39.044727 0 0 0 38.626479 34.025745h0.369043a35.378902 35.378902 0 0 0 35.329696-35.28049v-125.966605z"
        fill={getIconColor(color, 1, '#14100E')}
      />
      <path
        d="M986.328425 489.109383h-462.779656a36.904279 36.904279 0 0 0-36.904279 36.904279V974.351444a36.904279 36.904279 0 0 0 73.808558 0V562.917941h388.971098V974.351444a36.904279 36.904279 0 0 0 73.808558 0V526.013662a36.904279 36.904279 0 0 0-36.904279-36.904279z"
        fill={getIconColor(color, 2, '#229E8E')}
      />
      <path
        d="M826.409884 937.447165h-142.942574a36.904279 36.904279 0 0 0 0 73.808557h142.942574a36.904279 36.904279 0 0 0 0-73.808557z"
        fill={getIconColor(color, 3, '#229E8E')}
      />
    </svg>
  );
};

IconZu1598.defaultProps = {
  size: 18,
};

export default IconZu1598;
