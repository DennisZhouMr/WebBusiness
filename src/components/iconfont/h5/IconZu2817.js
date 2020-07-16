/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu2817 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M885.192769 313.976999h-192.116041c68.283749-16.498173 161.116371-51.964765 201.971427-126.468927l-50.467258-13.579955-52.399938-36.887304s-36.119352 161.052374-135.10839 133.278104c0 0 196.250183-236.196497-13.887135-267.503348-193.165575-28.734211-152.822487 171.931697-152.822487 171.931697s-69.474075-201.459459-184.09094-102.470421c-111.250675 96.083619 64.252 208.409427 64.252 208.409426a87.520952 87.520952 0 0 1-98.989038-6.962766 167.451976 167.451976 0 0 1-59.708283-119.275775l-40.765463 54.358216-58.236374 11.647275a441.482918 441.482918 0 0 0 131.217431 93.434184H147.945862a25.969583 25.969583 0 0 0-25.969583 25.969583v133.751674a25.982383 25.982383 0 0 0 25.969583 25.969583h38.768787v478.165434a46.217923 46.217923 0 0 0 46.153927 46.153927h567.38868a46.217923 46.217923 0 0 0 46.153927-46.153927V499.642241h38.768787a25.982383 25.982383 0 0 0 25.969583-25.969583v-133.751674a25.969583 25.969583 0 0 0-25.956784-25.943985z m-273.26299-229.489714c133.738875 2.559841 8.67786 184.09094 8.67786 184.09094-36.46493-31.255654-88.570486 15.627827-88.570486 15.627827s-12.159243-201.44666 79.892626-199.718767zM407.001736 272.046809s-100.72973-62.524108-62.524108-131.985384c34.788234-63.240863 145.808523 105.196652 173.301212 173.915574h-13.720746c-10.252162-14.693485-35.300203-34.596246-97.056358-41.917391z m398.759177 705.773666a5.490858 5.490858 0 0 1-5.478059 5.490858H586.228979l31.178859-36.810509 77.127999 31.575635-43.837271-70.894787 53.871846-63.599241-80.967759 19.787568-43.837271-70.894787-6.207614 83.118026-80.96776 19.787569 77.127999 31.575634-4.198139 56.316494H232.881375a5.490858 5.490858 0 0 1-5.478059-5.490858V499.642241h309.907108l-15.051863 24.651266-63.496847-15.141458 42.480556 49.584114-34.033082 55.727731 60.284248-25.07364 42.467756 49.571315-5.222075-65.07115 60.284247-25.086438-63.509646-15.128658-2.726231-34.007483h247.024623z"
        fill={getIconColor(color, 0, '#A0A0A0')}
      />
      <path
        d="M411.135879 757.49499l-15.538233-88.314502-39.35755 80.63498-88.813671-12.517621 64.482386 62.33212-39.35755 80.634981 79.214269-42.070982 64.495185 62.33212-15.538233-88.314502 79.214269-42.070981z"
        fill={getIconColor(color, 1, '#A0A0A0')}
      />
      <path
        d="M632.894874 670.652396l-67.477399 51.811175 85.050705-2.25266 28.427031 80.187008 24.139297-81.582121 85.050706-2.25266-70.126835-48.163402 24.139297-81.582121-67.477399 51.811174-70.126835-48.163401z"
        fill={getIconColor(color, 2, '#A0A0A0')}
      />
      <path
        d="M301.408309 635.160205l7.833113 55.702133 26.404756-49.660909 55.394952 9.765792-39.075968-40.458281 26.404756-49.660909-50.556852 24.664065-39.075968-40.458282 7.833113 55.702133-50.556853 24.664065z"
        fill={getIconColor(color, 3, '#A0A0A0')}
      />
    </svg>
  );
};

IconZu2817.defaultProps = {
  size: 18,
};

export default IconZu2817;