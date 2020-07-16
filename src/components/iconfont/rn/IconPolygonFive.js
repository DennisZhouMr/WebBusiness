/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPolygonFive = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M970.060128 713.28163V310.716887a109.442757 109.442757 0 0 0-54.713138-94.773472l-348.601552-201.282371a109.434516 109.434516 0 0 0-109.434515 0l-348.601552 201.282371a109.434516 109.434516 0 0 0-54.721379 94.773472v402.564743a109.434516 109.434516 0 0 0 54.721379 94.773471l348.601552 201.282372a109.434516 109.434516 0 0 0 109.434515 0l348.601552-201.282372a109.442757 109.442757 0 0 0 54.713138-94.773471z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M447.462723 619.266346a139.078009 139.078009 0 1 1 139.078009 138.929668 139.003839 139.003839 0 0 1-139.078009-138.929668z m61.808786 0a77.269223 77.269223 0 1 0 77.269223-77.195053 77.219776 77.219776 0 0 0-77.269223 77.195053z m-216.330751 46.298901v-52.084204c0 43.612279 60.539645 72.959091 141.789355 80.714034a169.924714 169.924714 0 0 0 53.880779 63.45702c-3.461292 0.098894-6.741278 0.510953-10.243776 0.510952-102.421279 0.032965-185.426357-41.43661-185.426358-92.597802z m256.753697 11.809599V559.460165h36.706177a70.874074 70.874074 0 0 1 36.458943 7.136854 24.863614 24.863614 0 0 1 11.33161 22.65498 28.539177 28.539177 0 0 1-4.944702 17.347666 19.778811 19.778811 0 0 1-13.185875 8.142278v0.824117a25.943208 25.943208 0 0 1 16.193902 9.353729 34.05252 34.05252 0 0 1-6.691831 43.398009 50.51014 50.51014 0 0 1-31.670822 9.065289z m25.028437-20.602929h16.292796a24.220803 24.220803 0 0 0 15.246167-3.964003 14.578632 14.578632 0 0 0 4.944703-12.09804q0-14.685768-20.982022-14.677526h-15.501644z m0-50.567828h14.529186a26.693154 26.693154 0 0 0 14.726973-3.148127 11.768393 11.768393 0 0 0 4.565609-10.4086 10.4086 10.4086 0 0 0-4.944703-9.716341 31.967504 31.967504 0 0 0-15.658226-2.950339h-13.185874z m-281.782134-33.764079v-52.108927c0 40.637216 52.743497 68.756093 125.603694 78.72791a165.128352 165.128352 0 0 0-1.986122 19.671677 167.147439 167.147439 0 0 0 5.76882 41.543745c-74.846319-11.95794-129.386392-46.537895-129.386392-87.834405z m0-92.103332v-52.108927c0 47.518595 71.912462 78.010929 164.164135 82.147997a168.531956 168.531956 0 0 0-31.983986 58.273323c-76.280283-11.53764-132.180149-46.471966-132.180149-88.312393z m0-93.125238v-30.879669c0-51.14471 83.005079-92.606044 185.426358-92.606044s185.426357 41.461334 185.426357 92.606044v30.863187c0 25.011955-20.026047 47.592765-52.281991 64.281137a169.875267 169.875267 0 0 0-24.962509-2.472351 169.215973 169.215973 0 0 0-96.644217 30.220375c-3.889833 0.123618-7.606601 0.601606-11.53764 0.601606-102.421279 0-185.426357-41.477816-185.426358-92.630767z m356.842724 74.170543a49.974464 49.974464 0 0 0 14.009991-33.656944v40.587769c-4.631538-2.381699-9.122977-4.961185-14.009991-6.930825z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconPolygonFive.defaultProps = {
  size: 18,
};

export default IconPolygonFive;