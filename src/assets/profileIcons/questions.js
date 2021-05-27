import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Question({ color }) {
    return (
        <Svg width={26} height={27} viewBox="0 0 24 25" fill={color || '#fff'} xmlns="http://www.w3.org/2000/svg">
            <Path d="M5 16.237v5.989H3V3.26h9.382a1.001 1.001 0 01.894.552L14 5.257h6a1 1 0 011 .998v10.98a.997.997 0 01-1 .998h-6.382a1.002 1.002 0 01-.894-.552L12 16.237H5zm0-10.98v8.984h8.236l1 1.996H19V7.253h-6.236l-1-1.996H5z" />
        </Svg>
    );
}

export default Question;
