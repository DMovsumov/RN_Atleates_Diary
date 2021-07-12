import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Plus = ({ width, height, color }) => {
    return (
        <Svg width={width || 21} height={height || 22} viewBox="0 0 21 22" fill="#fff">
            <Path d="M20.84 8.678v4.326h-8.148v8.19H8.324v-8.19H.176V8.678h8.148V.488h4.368v8.19h8.148z" />
        </Svg>
    );
};

export default Plus;
