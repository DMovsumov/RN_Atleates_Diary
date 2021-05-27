import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Statistics({ color }) {
    return (
        <Svg width={26} height={27} viewBox="0 0 24 25" fill={color || '#fff'} xmlns="http://www.w3.org/2000/svg">
            <Path d="M5 3.97v15.971h16v1.997H3V3.97h2zm15.293 3.288l1.414 1.411L16 14.366l-3-2.995-4.293 4.285-1.414-1.411L13 8.548l3 2.995 4.293-4.285z" />
        </Svg>
    );
}

export default Statistics;
