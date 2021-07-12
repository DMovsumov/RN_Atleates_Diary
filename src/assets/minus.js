import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Minus = ({ color }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            height={45}
            fill="#fff"
            className="prefix__bi prefix__bi-file-minus"
            viewBox="0 0 16 16">
            <Path d="M5.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" />
            {/*<Path d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" />*/}
        </Svg>
    );
};

export default Minus;
