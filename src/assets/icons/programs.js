import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';

const Programs = ({ color, width, height }) => {
    return (
        <Svg width={width || 30} height={height || 30} viewBox="0 0 24 25" fill={color || '#C4C4C4'}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3H7v.625a.625.625 0 11-1.25 0V3H3.875C2.839 3 2 3.84 2 4.875V8h20V4.875C22 3.839 21.16 3 20.125 3H18.25v.625a.625.625 0 11-1.25 0V3zm1.25-1.25h1.875c1.726 0 3.125 1.4 3.125 3.125v16.259c0 1.726-1.4 3.125-3.125 3.125H3.875A3.125 3.125 0 01.75 21.134V4.875c0-1.726 1.4-3.125 3.125-3.125H5.75v-.625a.625.625 0 111.25 0v.625h10v-.625a.625.625 0 111.25 0v.625zM22 9.25H2v11.884c0 1.035.84 1.875 1.875 1.875h16.25c1.035 0 1.875-.84 1.875-1.875V9.25zM3.25 11.125c0-.345.28-.625.625-.625h2.5c.345 0 .625.28.625.625v2.5c0 .345-.28.625-.625.625h-2.5a.625.625 0 01-.625-.625v-2.5zm1.25.625V13h1.25v-1.25H4.5z"
                fill={color || '#C4C4C4'}
            />
        </Svg>
    );
};

export default Programs;
