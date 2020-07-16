/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPunchClock = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M798.996 962.56H224.942c-105.441 0-163.502-57.17-163.502-161.065V523.09c-0.133-69.755 39.25-133.755 102.093-165.888l36.813 69.437c-36.557 18.678-59.464 55.89-59.392 96.461v278.385c0 60.303 22.753 82.75 83.988 82.75h574.054c61.236 0 84-22.447 84-82.74V523.08c-0.144-41.861-24.546-79.975-62.833-98.15l34.447-70.739c65.761 31.376 107.663 96.912 107.95 168.899v278.405c-0.051 103.895-58.112 161.065-163.564 161.065zM207.084 610.15h39.577V152.013c0.103-49.982 41.216-90.491 91.955-90.573h346.706c50.75 0.082 91.874 40.581 91.955 90.583v458.138h39.588v78.305H207.084V610.15z m119.09 0h371.61V152.013c0-6.759-5.58-12.257-12.462-12.257H338.637c-6.881 0-12.462 5.488-12.462 12.267v458.138zM630.58 297.032H393.421v-78.439h237.158v78.439z m0 142.53H393.421v-78.315h237.158v78.315z"
        fill={getIconColor(color, 0, '#1296db')}
      />
    </svg>
  );
};

IconPunchClock.defaultProps = {
  size: 18,
};

export default IconPunchClock;
