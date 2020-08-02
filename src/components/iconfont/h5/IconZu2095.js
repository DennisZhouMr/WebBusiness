/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu2095 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M804.64088 90.063949H616.352562V33.445122A33.445122 33.445122 0 0 0 582.90744 0h-128.345459a33.555398 33.555398 0 0 0-33.555398 33.555398v56.508551h-201.647463a94.522248 94.522248 0 0 0-94.522248 94.522248V929.468772a94.522248 94.522248 0 0 0 94.522248 94.522248h311.198748a34.815695 34.815695 0 0 0 35.256799-29.932045 33.47663 33.47663 0 0 0-33.256078-36.958199H223.281794a31.601938 31.601938 0 0 1-31.507416-31.507416v-737.115997a31.601938 31.601938 0 0 1 31.507416-31.507416H423.243609a97.67299 97.67299 0 0 0 190.871926 0h186.649933a31.601938 31.601938 0 0 1 31.507416 31.507416v525.843019a34.799941 34.799941 0 0 0 29.932045 35.241045 33.47663 33.47663 0 0 0 36.942445-33.256078V184.586197a94.522248 94.522248 0 0 0-94.506494-94.522248z m-255.21007 45.228895a32.263594 32.263594 0 0 1-10.066619 23.473025 30.058075 30.058075 0 0 1-36.422573 3.78089 33.382107 33.382107 0 0 1-15.076299-28.860793V66.905998h61.565491z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M881.991586 775.271478a27.049117 27.049117 0 0 0-39.084949 2.599362l-144.934114 170.644165-99.973031-79.115121a27.127885 27.127885 0 0 0-38.864398 5.372014 29.364912 29.364912 0 0 0 5.198724 40.187709l120.53162 95.372949a27.049117 27.049117 0 0 0 37.635609-3.843905l162.074147-190.730143a29.396419 29.396419 0 0 0-2.583608-40.48703z"
        fill={getIconColor(color, 1, '#229E8E')}
      />
      <path
        d="M558.347409 548.733157h104.399823a25.694298 25.694298 0 0 0 0-51.388595h-104.399823a25.694298 25.694298 0 1 0 0 51.388595z"
        fill={getIconColor(color, 2, '#229E8E')}
      />
      <path
        d="M558.347409 439.827774h163.476228a25.694298 25.694298 0 1 0 0-51.388596H558.347409a25.694298 25.694298 0 1 0 0 51.388596z"
        fill={getIconColor(color, 3, '#229E8E')}
      />
      <path
        d="M428.47384 591.914071a36.45408 36.45408 0 0 1-2.047982-10.712522 112.96984 112.96984 0 0 0 25.095657-46.961803 26.671028 26.671028 0 0 0 12.602967-15.753708 38.297264 38.297264 0 0 0-3.371294-35.382828c1.465095-13.942032 5.293246-49.765964-15.753708-73.396526a84.943994 84.943994 0 0 0-112.150647 0c-20.983939 23.929882-17.171542 59.86409-15.753708 73.396526a38.328772 38.328772 0 0 0-3.371294 35.382828 26.781304 26.781304 0 0 0 12.602967 15.753708 112.323938 112.323938 0 0 0 24.953873 46.961803 36.45408 36.45408 0 0 1-2.047982 10.712522c-25.205933 5.151463-117.428139 55.500313-117.428139 104.384069v8.065899h313.9714v-8.065899c0.094522-48.883756-92.222207-99.232607-117.30211-104.384069z"
        fill={getIconColor(color, 4, '#229E8E')}
      />
    </svg>
  );
};

IconZu2095.defaultProps = {
  size: 18,
};

export default IconZu2095;
