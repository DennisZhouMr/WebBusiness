/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconMulitPeopleCircle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.034133 1023.999147a508.585819 508.585819 0 0 1-199.287134-40.2602 509.234351 509.234351 0 0 1-162.747462-109.738484 510.138883 510.138883 0 0 1-109.738484-162.730395A508.585819 508.585819 0 0 1 0.034987 512a508.790619 508.790619 0 0 1 40.226066-199.304201 510.787415 510.787415 0 0 1 109.738484-162.730396 509.490351 509.490351 0 0 1 162.747462-109.70435A508.585819 508.585819 0 0 1 512.034133 0.000853a508.841819 508.841819 0 0 1 199.321268 40.2602 509.490351 509.490351 0 0 1 162.747462 109.70435 510.292483 510.292483 0 0 1 109.704351 162.730396A508.790619 508.790619 0 0 1 1024.03328 512a508.585819 508.585819 0 0 1-40.226066 199.270068 510.036483 510.036483 0 0 1-109.704351 162.730395 509.234351 509.234351 0 0 1-162.747462 109.738484A508.841819 508.841819 0 0 1 512.034133 1023.999147z m-5.751457-522.870596a161.621064 161.621064 0 0 0-121.173131 56.132174 202.25673 202.25673 0 0 0-50.124717 135.406707 189.439684 189.439684 0 0 0 1.706664 26.760489 404.820659 404.820659 0 0 0 160.579999 29.593551 378.316169 378.316169 0 0 0 179.472768-38.997269c0.324266-4.26666 0.733865-10.700782 0.733865-17.373837-0.034133-105.557157-76.834005-191.521814-171.229581-191.521815z m209.544184-2.833061a87.77372 87.77372 0 0 0-66.559889 32.341279 140.509632 140.509632 0 0 1 53.264978 102.229163c2.747729 0.170666 5.546657 0.170666 8.533319 0.170666a198.655669 198.655669 0 0 0 96.136373-21.333298c0.273066-3.413328 0.477866-6.29759 0.477866-9.335451-0.0512-57.395104-41.250065-104.02116-91.88678-104.02116z m-419.190768 0a85.94759 85.94759 0 0 0-64.853225 30.463949 111.069682 111.069682 0 0 0-26.879955 73.60841c0 2.662396 0.136533 5.631991 0.392533 9.335451a199.287135 199.287135 0 0 0 96.153439 21.333298c2.952528 0 5.751457 0 8.533319-0.170666a140.612032 140.612032 0 0 1 53.162578-102.229163A86.579056 86.579056 0 0 0 296.619026 498.346689z m418.132637-114.22701a48.708185 48.708185 0 0 0-48.708186 48.639919 48.776452 48.776452 0 0 0 48.708186 48.725252 48.793519 48.793519 0 0 0 48.725252-48.725252 48.725252 48.725252 0 0 0-48.759386-48.708186z m-417.057439 0a48.708185 48.708185 0 0 0-48.708185 48.639919 48.776452 48.776452 0 0 0 48.708185 48.725252 48.776452 48.776452 0 0 0 48.708186-48.725252 48.708185 48.708185 0 0 0-48.759385-48.708186z m206.506323-93.86651a89.616917 89.616917 0 0 0-89.565717 89.463317 89.685184 89.685184 0 0 0 89.565717 89.599851 89.651051 89.651051 0 0 0 89.497451-89.599851A89.582784 89.582784 0 0 0 504.13228 290.133703z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </Svg>
  );
};

IconMulitPeopleCircle.defaultProps = {
  size: 18,
};

export default IconMulitPeopleCircle;
