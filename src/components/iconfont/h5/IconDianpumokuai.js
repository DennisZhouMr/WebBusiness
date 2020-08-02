/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconDianpumokuai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M719.533498 590.866135a128.827888 128.827888 0 1 0 128.766774 128.766775A129.01123 129.01123 0 0 0 719.533498 590.866135z m0.122228 199.63841a70.810522 70.810522 0 1 1 71.299432-70.810521 71.116091 71.116091 0 0 1-71.299432 70.749408z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <path
        d="M1023.513534 697.774541l-19.006391-85.355606a35.446003 35.446003 0 0 0-28.519773-25.993736l-33.245907-3.70757a48.891039 48.891039 0 0 1-28.927198-13.730234 54.004227 54.004227 0 0 1-6.60029-31.982888l3.829798-33.897787a35.71083 35.71083 0 0 0-18.49711-34.1015l-77.044129-37.97204a30.556899 30.556899 0 0 0-13.485779-2.933463 34.244099 34.244099 0 0 0-24.201064 9.574496l-23.304729 23.915866a49.155866 49.155866 0 0 1-28.519773 14.667312 48.402129 48.402129 0 0 1-28.519772-14.667312l-23.345472-24.201064a34.895979 34.895979 0 0 0-24.201064-9.533753 30.556899 30.556899 0 0 0-13.363551 2.933463l-77.410812 38.094268a35.608974 35.608974 0 0 0-18.456367 33.979272l3.829798 33.897787a53.474574 53.474574 0 0 1-6.641033 32.105116 49.359578 49.359578 0 0 1-28.927198 13.608006l-33.082937 3.70757a34.957093 34.957093 0 0 0-28.519772 25.952993l-18.945278 85.355606a35.71083 35.71083 0 0 0 14.626569 35.934914l28.173461 18.048942a50.581854 50.581854 0 0 1 20.371267 25.219628 51.47819 51.47819 0 0 1-7.618854 31.738433l-17.845229 28.927198a36.016399 36.016399 0 0 0 2.037127 38.827634l53.494945 68.406712a34.875608 34.875608 0 0 0 26.849329 12.22276 30.556899 30.556899 0 0 0 9.941178-1.670444l31.331007-11.204197a54.146826 54.146826 0 0 1 18.089685-2.933462 33.429248 33.429248 0 0 1 13.893204 2.444552 50.561483 50.561483 0 0 1 19.47493 25.830766l10.837514 32.105115a34.855237 34.855237 0 0 0 31.20878 22.571363h85.559319a35.038578 35.038578 0 0 0 31.20878-22.571363l10.918998-32.105115a50.174429 50.174429 0 0 1 19.515673-25.830766 32.716254 32.716254 0 0 1 13.730234-2.56678 54.635736 54.635736 0 0 1 18.089684 2.933463l31.432864 11.204196a26.890072 26.890072 0 0 0 9.818951 1.548216 34.957093 34.957093 0 0 0 26.890071-12.222759l53.331976-68.488198a36.077513 36.077513 0 0 0 2.037126-38.868376l-17.845229-28.886456a36.933106 36.933106 0 0 1 4.787247-51.987471 37.544244 37.544244 0 0 1 7.985537-5.052074l28.15309-17.967457a35.507117 35.507117 0 0 0 14.626569-35.323776z m-69.466018 9.16707h0.203713l-16.663696 10.715286a61.439739 61.439739 0 0 0-24.44552 34.508925l-5.866925 26.115964a64.597286 64.597286 0 0 0 7.007716 42.046293l10.470831 17.071121a31.086552 31.086552 0 0 1-1.670444 32.594027l-12.589442 16.297013a29.966133 29.966133 0 0 1-22.286166 10.185633 22.245423 22.245423 0 0 1-7.904051-1.263019l-18.741565-6.641033a52.781951 52.781951 0 0 0-17.071121-2.526037 59.300756 59.300756 0 0 0-24.44552 4.929847l-23.793639 11.611622a63.415752 63.415752 0 0 0-27.786407 31.69769l-6.478063 19.108248a29.171653 29.171653 0 0 1-25.749281 18.741565h-20.371266a29.253138 29.253138 0 0 1-25.708538-18.741565l-6.518805-19.108248a62.641644 62.641644 0 0 0-27.623437-31.69769l-23.712154-11.611622a60.034122 60.034122 0 0 0-24.44552-4.929847 52.781951 52.781951 0 0 0-17.071121 2.526037l-18.578595 6.641033a24.241807 24.241807 0 0 1-7.904051 1.263019 29.619821 29.619821 0 0 1-22.286166-10.185633l-12.630185-16.297013a30.312444 30.312444 0 0 1-1.629701-32.349571l10.552316-17.071122a64.108375 64.108375 0 0 0 7.007715-42.046293l-5.866924-26.115964a62.845357 62.845357 0 0 0-24.078837-34.75338l-16.663696-10.715286a30.08836 30.08836 0 0 1-12.22276-29.905019l4.440936-20.371266a29.680935 29.680935 0 0 1 23.426957-21.5528l19.6379-2.281582a61.29714 61.29714 0 0 0 36.66828-20.656464l16.297013-20.860177a63.639836 63.639836 0 0 0 11.489394-41.02773l-2.200097-20.004584a30.434672 30.434672 0 0 1 15.319192-28.519773l18.211913-8.922614a25.932622 25.932622 0 0 1 10.918998-2.40381 28.682743 28.682743 0 0 1 20.126811 7.781824l13.893204 14.259886a61.684194 61.684194 0 0 0 38.460951 16.297014h26.156706a60.013751 60.013751 0 0 0 38.460951-16.297014l13.893203-14.259886a28.519773 28.519773 0 0 1 20.126811-7.781824 24.44552 24.44552 0 0 1 11.081969 2.40381l18.211912 8.922614a29.884648 29.884648 0 0 1 15.27845 28.519773l-2.159354 20.126811a65.188052 65.188052 0 0 0 11.448652 40.742533l16.297013 21.023147a62.376817 62.376817 0 0 0 36.668279 20.615721l19.597158 2.281582a29.253138 29.253138 0 0 1 23.589927 21.675028l4.440936 20.371266a29.945762 29.945762 0 0 1-12.22276 29.823534z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <path
        d="M409.116142 939.54073H139.543174a15.60439 15.60439 0 0 1-15.706246-14.667312V680.560821a37.238675 37.238675 0 0 0-13.485778-25.484454 37.6461 37.6461 0 0 0-61.582338 26.482646v248.529449A84.825953 84.825953 0 0 0 133.431794 1014.792188h274.176874a37.116447 37.116447 0 0 0 34.182985-36.953478 36.281225 36.281225 0 0 0-32.675511-38.29798z"
        fill={getIconColor(color, 2, '#000000')}
      />
      <path
        d="M1013.022332 280.571007a85.701917 85.701917 0 0 0-5.826182-26.971557l0.794479-0.95745-3.605714-6.111379c-40.04991-68.467826-116.319931-198.843931-118.153345-202.245933C873.499529 20.287337 858.506277 0.404981 803.626085 0.404981H208.927707a87.596445 87.596445 0 0 0-85.701917 48.116931L11.917191 242.904535l-1.344504 3.259403v0.203712a86.211199 86.211199 0 0 0-9.16707 34.26447l-0.122227 152.071504a38.705406 38.705406 0 0 0 0 19.739757v14.911767h7.618853a39.112831 39.112831 0 0 0 29.945762 14.137658h115.403224a38.848005 38.848005 0 0 0-0.346312-77.675638H74.090296l0.855593-119.864531a13.139467 13.139467 0 0 1 13.220952-12.793155h835.955285a16.297013 16.297013 0 0 1 15.665504 12.467215v125.996282a38.705406 38.705406 0 0 0 38.277609 33.714446h0.366683a35.058949 35.058949 0 0 0 35.018207-34.957093v-124.875863z"
        fill={getIconColor(color, 3, '#000000')}
      />
    </svg>
  );
};

IconDianpumokuai.defaultProps = {
  size: 18,
};

export default IconDianpumokuai;
