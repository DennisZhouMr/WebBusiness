/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconUserCircle = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-499.512195 0a499.512195 499.512195 0 1 0 999.02439 0 499.512195 499.512195 0 1 0-999.02439 0Z"
        fill={getIconColor(color, 0, '#E4E4E4')}
      />
      <path
        d="M582.805854 750.092488h-3.996098a58.717659 58.717659 0 0 1-39.111805-101.625756 14.311024 14.311024 0 0 1 19.730732 20.729756 30.72 30.72 0 0 0-9.740488 21.928585 31.044683 31.044683 0 0 0 31.544195 30.395317h3.271805a35.190634 35.190634 0 0 0 22.478049-9.44078l28.397268-27.473171a30.769951 30.769951 0 0 0 9.740488-21.978537 28.746927 28.746927 0 0 0-9.166049-21.429073 14.311024 14.311024 0 0 1 19.730732-20.754731 57.443902 57.443902 0 0 1 18.082341 42.60839 59.292098 59.292098 0 0 1-18.581853 42.183805l-28.397269 27.47317a63.488 63.488 0 0 1-43.707317 17.482927z m-290.59122-15.13522a204.17561 204.17561 0 0 1 138.764488-196.283317 133.369756 133.369756 0 1 1 71.105561 20.629854 135.517659 135.517659 0 0 1-14.535805-0.824195 171.932098 171.932098 0 0 0-166.712195 176.477658 14.311024 14.311024 0 1 1-28.622049 0z m104.897561-309.198048a104.947512 104.947512 0 0 0 209.92 0 104.947512 104.947512 0 0 0-209.92 0z m199.405268 234.520975a57.443902 57.443902 0 0 1-18.082341-42.60839 59.342049 59.342049 0 0 1 18.631805-42.258732l28.647024-27.24839a63.88761 63.88761 0 0 1 87.414634-0.524488 58.093268 58.093268 0 0 1 18.032391 42.458537 59.317073 59.317073 0 0 1-18.60683 42.758244 14.311024 14.311024 0 0 1-19.730731-20.704781 30.769951 30.769951 0 0 0 9.740487-22.228293 29.446244 29.446244 0 0 0-9.091122-21.429073 35.21561 35.21561 0 0 0-47.828292 0.449561l-28.746927 27.223415a30.769951 30.769951 0 0 0-9.740488 21.953561 28.796878 28.796878 0 0 0 9.166049 21.404097 14.311024 14.311024 0 0 1-19.730732 20.754732z"
        fill={getIconColor(color, 1, '#838383')}
      />
    </svg>
  );
};

IconUserCircle.defaultProps = {
  size: 18,
};

export default IconUserCircle;
