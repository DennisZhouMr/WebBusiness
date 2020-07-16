/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconLianhe99 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M223.860364 1016.242424a108.373333 108.373333 0 0 1-108.032-108.06303V115.820606A108.342303 108.342303 0 0 1 223.860364 7.773091h576.279272a108.326788 108.326788 0 0 1 108.047516 108.00097v792.405333a108.373333 108.373333 0 0 1-108.047516 108.06303z m568.118303-66.715151h1.908363a51.541333 51.541333 0 0 0 50.594909-52.487758V127.069091v-1.892849a51.556848 51.556848 0 0 0-52.503272-50.594909H230.144A51.556848 51.556848 0 0 0 179.533576 127.069091v771.832242A51.572364 51.572364 0 0 0 232.021333 949.527273z m-135.912728-68.266667a27.011879 27.011879 0 0 1 27.011879-27.011879 27.011879 27.011879 0 0 1 27.027394 27.011879 27.027394 27.027394 0 0 1-27.027394 27.027394 27.027394 27.027394 0 0 1-27.011879-27.136z m-252.105697 10.752l-44.993939-44.993939-44.993939 44.993939a26.732606 26.732606 0 0 1-37.810425 0 26.763636 26.763636 0 0 1 0-37.810424l44.99394-44.99394-44.99394-44.993939a26.748121 26.748121 0 0 1 0-36.972606 26.763636 26.763636 0 0 1 37.82594-0.853333l44.993939 44.993939 44.99394-44.993939 0.915394-0.915394a26.065455 26.065455 0 0 1 36.879515 0.915394l0.899878 0.884363a26.14303 26.14303 0 0 1-0.899878 36.941576l-44.99394 44.993939 44.99394 44.99394a26.732606 26.732606 0 0 1 0 37.810424 26.59297 26.59297 0 0 1-18.91297 7.757576 26.546424 26.546424 0 0 1-18.881939-7.866182z m351.185455-55.77697H611.056485a27.011879 27.011879 0 0 1-26.965333-26.965333 26.996364 26.996364 0 0 1 26.965333-27.058424h144.151273a27.011879 27.011879 0 0 1 26.965333 27.058424 26.996364 26.996364 0 0 1-26.996364 26.965333z m-99.079758-99.017697a26.996364 26.996364 0 0 1 26.996364-27.027394 27.027394 27.027394 0 0 1 27.027394 26.996364 27.011879 27.011879 0 0 1-27.027394 27.011879 27.011879 27.011879 0 0 1-26.996364-27.07394z m-324.142545-144.089212v-63.03806H268.792242a27.011879 27.011879 0 0 1-26.980848-27.027394 27.027394 27.027394 0 0 1 27.058424-26.996364h63.053576v-63.115636a27.011879 27.011879 0 0 1 27.042909-26.965334 27.027394 27.027394 0 0 1 26.980849 27.058425v63.022545H449.062788a27.027394 27.027394 0 0 1 26.965333 27.042909 27.011879 27.011879 0 0 1-27.058424 26.980849h-63.022545v63.00703a27.058424 27.058424 0 0 1-26.980849 26.980848 27.027394 27.027394 0 0 1-27.027394-27.042909z m423.175758-63.03806H592.934788a26.996364 26.996364 0 0 1-26.965333-27.027394 27.011879 27.011879 0 0 1 27.058424-26.996364H755.192242a27.027394 27.027394 0 0 1 26.965334 27.058424 26.980848 26.980848 0 0 1-26.996364 26.965334z m-63.022546-216.234667H330.294303a89.181091 89.181091 0 0 1-88.436364-89.987879v-19.626666a89.181091 89.181091 0 0 1 89.987879-88.436364h361.813334a89.165576 89.165576 0 0 1 88.327757 89.987879v19.626666a89.181091 89.181091 0 0 1-89.165576 88.436364z m-396.194909-107.938909v17.997576a36.103758 36.103758 0 0 0 36.026182 36.010666h360.168727a36.103758 36.103758 0 0 0 36.010667-36.010666v-17.997576a36.088242 36.088242 0 0 0-36.010667-36.026182H331.938909a36.088242 36.088242 0 0 0-36.026182 35.933091z"
        fill={getIconColor(color, 0, '#434343')}
      />
    </svg>
  );
};

IconLianhe99.defaultProps = {
  size: 18,
};

export default IconLianhe99;
