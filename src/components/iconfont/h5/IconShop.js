/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShop = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1374 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M259.417794 674.11145a44.03129 44.03129 0 0 0 17.275593 34.138288v34.138288a64.263222 64.263222 0 0 0-17.275593 34.138288 40.579475 40.579475 0 0 0 43.205497 42.676989c8.654312 0 17.308624-8.538701 25.962936-17.077402s8.62128-17.04437 8.62128-34.138288a44.146901 44.146901 0 0 0-17.275592-34.138288v-34.105256a44.163417 44.163417 0 0 0 17.275592-34.138288 40.562959 40.562959 0 0 0-43.205496-42.67699 57.607329 57.607329 0 0 0-34.584217 51.199175z m752.165417 273.073273h-60.547152v-409.593394a164.861341 164.861341 0 0 0 86.477056-145.075337 163.193239 163.193239 0 0 0-25.929904-85.320947l-164.26677-307.195045H190.232846v8.505669a443.004984 443.004984 0 0 1-25.929905 42.676989L25.966076 315.71723A142.878728 142.878728 0 0 0 0.036171 401.038177a168.544378 168.544378 0 0 0 103.75265 153.597522v401.071209H51.89598a34.138288 34.138288 0 1 0 0 68.276576h951.049435a36.979016 36.979016 0 0 0 34.584216-34.138288 29.877196 29.877196 0 0 0-25.929904-42.676989z m-648.445799 0H172.957253V554.652215a160.781923 160.781923 0 0 0 103.719618-59.721359c25.929904 25.583071 51.89284 51.199174 86.477057 51.199174z m510.092418 0H423.618501V554.652215a164.646635 164.646635 0 0 0 95.098337-59.721359 152.49096 152.49096 0 0 0 242.056483 0 151.945936 151.945936 0 0 0 121.061273 59.721359v392.532508z m8.654312-469.314753a86.113708 86.113708 0 0 1-86.477057-85.353978c0-17.04437-8.654312-42.643957-34.584217-42.643958a36.945985 36.945985 0 0 0-34.584216 34.105257 86.460541 86.460541 0 0 1-172.88805 0 34.584216 34.584216 0 0 0-69.168433 0 86.477057 86.477057 0 0 1-172.921082 0 36.912953 36.912953 0 0 0-34.584216-34.105257 106.642925 106.642925 0 0 0-25.929905 17.044371 65.287205 65.287205 0 0 0-8.654312 25.599587 86.06416 86.06416 0 0 1-86.444025 85.353978h-8.654312a91.200594 91.200594 0 0 1-77.789713-85.353978 143.192529 143.192529 0 0 1 25.929905-51.199175l138.336865-264.534572h570.606539l138.336865 264.534572a122.366026 122.366026 0 0 1 17.275593 59.72136 76.996952 76.996952 0 0 1-77.789713 76.815277z m466.853889 375.455105h-51.859809v-332.794632c43.205497-25.583071 77.789713-68.276576 77.789713-119.459234a159.080789 159.080789 0 0 0-17.275592-68.276577L1219.055478 68.26006h-293.982355v8.538701c-8.654312 8.538701-17.275592 17.04437-17.275593 25.599587s8.62128 25.583071 17.275593 25.583072h259.299043l112.406961 221.890614a120.301544 120.301544 0 0 1 17.275593 51.199175 69.151917 69.151917 0 0 1-138.303834 0 31.380139 31.380139 0 0 0-34.584217-34.138289 36.929469 36.929469 0 0 0-34.584216 34.138289 67.715037 67.715037 0 0 1-69.168433 68.26006 45.170884 45.170884 0 0 0-34.584216 17.060886 25.682166 25.682166 0 0 0 0 34.138288c8.654312 8.538701 17.275592 17.077402 25.929904 17.077402a135.776907 135.776907 0 0 0 103.752649-51.199174 206.729053 206.729053 0 0 0 95.098337 51.199174v315.71723h-259.299043a44.113869 44.113869 0 0 0-17.308624 34.138288 64.411864 64.411864 0 0 0 17.308624 34.138289h371.755552a36.945985 36.945985 0 0 0 34.584217-34.138289c0-17.093918-8.62128-34.138288-25.929905-34.138288z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShop.defaultProps = {
  size: 18,
};

export default IconShop;
