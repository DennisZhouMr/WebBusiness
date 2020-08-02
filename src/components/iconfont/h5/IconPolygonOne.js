/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPolygonOne = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M970.058202 713.279423V310.720577a109.432913 109.432913 0 0 0-54.720576-94.772084L566.74118 14.66907a109.432913 109.432913 0 0 0-109.432913 0l-348.596446 201.279423a109.441154 109.441154 0 0 0-54.712336 94.772084v402.558846a109.441154 109.441154 0 0 0 54.712336 94.772084l348.596446 201.279423a109.432913 109.432913 0 0 0 109.432913 0l348.596446-201.279423a109.432913 109.432913 0 0 0 54.720576-94.772084z"
        fill={getIconColor(color, 0, '#333303')}
      />
      <path
        d="M515.440639 758.176668a245.756374 245.756374 0 0 1-96.255473-19.424157 246.11898 246.11898 0 0 1-78.578419-52.989956 246.737059 246.737059 0 0 1-52.989956-78.578419A245.41025 245.41025 0 0 1 268.209117 510.945146a245.228947 245.228947 0 0 1 19.440638-96.238991 246.98429 246.98429 0 0 1 52.989957-78.594901 246.687613 246.687613 0 0 1 78.578418-52.973474A246.160185 246.160185 0 0 1 515.440639 263.713623a246.003605 246.003605 0 0 1 96.222508 19.424157 247.041978 247.041978 0 0 1 78.578419 52.973474 246.003605 246.003605 0 0 1 52.956992 78.594901A245.80582 245.80582 0 0 1 762.672161 510.945146a245.978882 245.978882 0 0 1-19.440639 96.23899 246.283801 246.283801 0 0 1-52.956992 78.578419 246.407417 246.407417 0 0 1-78.578419 52.989956A245.830543 245.830543 0 0 1 515.440639 758.176668z m77.779037-254.170487a62.631986 62.631986 0 0 0-43.677569 17.479268 61.906773 61.906773 0 0 0-18.830801 45.070307 55.758949 55.758949 0 0 0 18.830801 43.166624 65.730621 65.730621 0 0 0 43.677569 15.616791 62.763842 62.763842 0 0 0 43.677568-17.446305 61.807881 61.807881 0 0 0 18.830801-45.053824c0-35.716714-24.525367-58.816379-62.483646-58.816379z m1.928405-101.678084a17.949008 17.949008 0 0 0-12.905485 6.098377l-165.496781 191.192377a17.306207 17.306207 0 0 0 3.667268 22.03657 20.602627 20.602627 0 0 0 9.139325 2.398146 17.841875 17.841875 0 0 0 12.905485-6.098378l165.430853-191.192377a17.306207 17.306207 0 0 0-3.634304-22.053052 20.272985 20.272985 0 0 0-9.073396-2.365181z m-163.69199-1.25264a59.797064 59.797064 0 0 0-62.516611 62.500129 62.50837 62.50837 0 0 0 18.830801 43.677569 62.730878 62.730878 0 0 0 43.677569 18.830801 62.780324 62.780324 0 0 0 43.677568-17.446305 61.807881 61.807881 0 0 0 18.830801-45.037342 62.631986 62.631986 0 0 0-18.830801-43.677569 62.631986 62.631986 0 0 0-43.636363-18.830801z m161.763585 192.107134a25.909864 25.909864 0 0 1-18.377544-8.241051c-7.309812-10.911151-7.309812-29.453515 0-36.746845a25.984033 25.984033 0 0 1 18.377544-8.306979 25.703837 25.703837 0 0 1 18.377543 8.306979 24.616019 24.616019 0 0 1 0 36.746845 25.909864 25.909864 0 0 1-18.35282 8.249292zM427.755859 490.218903a25.934587 25.934587 0 0 1-18.377543-8.241051 24.723152 24.723152 0 0 1 0-36.812773 28.349215 28.349215 0 0 1 19.778521-8.241051 20.017512 20.017512 0 0 1 17.026011 8.241051 24.723152 24.723152 0 0 1 0 36.812773 26.173577 26.173577 0 0 1-18.402266 8.249292z"
        fill={getIconColor(color, 1, '#ffffff')}
      />
    </svg>
  );
};

IconPolygonOne.defaultProps = {
  size: 18,
};

export default IconPolygonOne;
