import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Arrow({ height, color, right }) {
    return (
        <Svg width={height - 1 || 40} height={height || 41} viewBox="0 0 24 25" fill={color || '#fff'} xmlns="http://www.w3.org/2000/svg">
            {!right ? (
                <Path d="M13.83 19.517a1 1 0 01-.78-.37L8.22 13.16a.997.997 0 010-1.268l5-5.989a1.002 1.002 0 011.767.547.998.998 0 01-.227.73l-4.47 5.35 4.32 5.351a.997.997 0 01-.78 1.637z" />
            ) : (
                <Path d="M10.17 19.188a1.002 1.002 0 00.78-.369l4.83-5.989a.997.997 0 000-1.268l-5-5.989a1 1 0 00-1.41-.13.999.999 0 00-.13 1.408l4.47 5.35-4.32 5.35a.998.998 0 00.78 1.637z" />
            )}
        </Svg>
    );
}

export default Arrow;
