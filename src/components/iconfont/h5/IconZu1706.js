/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZu1706 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M866.051938 130.599385h-11.815384v-8.916677a121.824492 121.824492 0 0 0-121.682708-121.698462h-441.107692a121.824492 121.824492 0 0 0-121.682708 121.698462v8.916677h-11.815384a121.808738 121.808738 0 0 0-121.682708 121.666953v650.066708a121.792985 121.792985 0 0 0 121.682708 121.6512h708.151138a121.792985 121.792985 0 0 0 121.682708-121.6512V252.282092a121.808738 121.808738 0 0 0-121.72997-121.682707z m-627.680492 106.385723l0.598646-80.4864c0-60.352985 26.907569-87.260554 87.276308-87.260554h371.491446c60.337231 0 87.276308 26.907569 87.276308 87.260554v74.988307a34.658462 34.658462 0 0 0 69.2224-0.110277v-29.664492c44.394338 6.522092 64.259938 33.083077 64.259938 85.385846v46.048493H105.440492v-46.048493c0-52.8384 19.897108-79.430892 64.275693-85.448861v35.320123h0.53563a34.658462 34.658462 0 0 0 68.056616 0z m680.125046 165.415384v465.116554c0 60.352985-26.907569 87.260554-87.276307 87.260554H192.732554c-60.352985 0-87.292062-26.907569-87.292062-87.260554V402.400492z"
        fill={getIconColor(color, 0, '#1A1311')}
      />
      <path
        d="M701.613292 137.121477H322.339446a34.800246 34.800246 0 0 0 0 69.600492h379.258092a34.800246 34.800246 0 1 0 0-69.600492z"
        fill={getIconColor(color, 1, '#229E8E')}
      />
      <path
        d="M667.191138 707.899077h-120.4224v-41.857969h120.4224a37.131815 37.131815 0 1 0 0-74.263631h-78.217846l40.172308-55.217231a34.863262 34.863262 0 0 0-56.383015-41.038769l-60.794093 83.574154-60.794092-83.574154a34.863262 34.863262 0 0 0-56.351508 41.038769l40.172308 55.217231h-78.2336a37.131815 37.131815 0 1 0 0 74.263631h120.359385v41.857969h-120.406647a37.131815 37.131815 0 1 0 0 74.263631h120.406647v31.712492a34.800246 34.800246 0 0 0 69.584738 0v-31.712492h120.4224a37.131815 37.131815 0 1 0 0-74.263631z"
        fill={getIconColor(color, 2, '#229E8E')}
      />
    </svg>
  );
};

IconZu1706.defaultProps = {
  size: 18,
};

export default IconZu1706;
