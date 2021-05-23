import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Recommendation = ({ color, width, height }) => {
    return (
        <Svg width={width || 30} height={height || 30} viewBox="0 0 18 24" fill={color || '#C4C4C4'}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 2.625a.625.625 0 11-1.25 0C5.25 1.589 6.09.75 7.125.75h3.75c1.036 0 1.875.84 1.875 1.875a.625.625 0 11-1.25 0A.625.625 0 0010.875 2h-3.75a.625.625 0 00-.625.625zM3.375 2a.625.625 0 110 1.25c-1.036 0-1.875.84-1.875 1.875v15C1.5 21.16 2.34 22 3.375 22h11.25c1.036 0 1.875-.84 1.875-1.875v-15c0-1.036-.84-1.875-1.875-1.875a.625.625 0 110-1.25c1.726 0 3.125 1.4 3.125 3.125v15c0 1.726-1.4 3.125-3.125 3.125H3.375A3.125 3.125 0 01.25 20.125v-15C.25 3.399 1.65 2 3.375 2zM4 8.875c0 .345.28.625.625.625h8.75a.625.625 0 100-1.25h-8.75A.625.625 0 004 8.875zm0 3.75c0 .345.28.625.625.625h8.75a.625.625 0 100-1.25h-8.75a.625.625 0 00-.625.625zM4.625 17a.625.625 0 110-1.25h6.25a.625.625 0 110 1.25h-6.25z"
                fill={color || '#C4C4C4'}
            />
        </Svg>
    );
};

export default Recommendation;