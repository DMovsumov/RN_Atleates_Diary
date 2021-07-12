import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CloseIcon(props) {
    return (
        <Svg width={20} height={20} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.247 8.802a1 1 0 011.418 0l4.065 4.082a.75.75 0 001.063-1.059L8.716 7.733a1 1 0 010-1.411l4.083-4.1a.75.75 0 00-1.062-1.058l-4.073 4.09a1 1 0 01-1.418 0l-4.073-4.09a.75.75 0 10-1.063 1.058l4.084 4.1a1 1 0 010 1.411l-4.076 4.093a.75.75 0 001.063 1.058l4.065-4.082z"
                fill="#F3EFEC"
            />
        </Svg>
    );
}

export default CloseIcon;
