import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Logo(props) {
    return (
        <Svg width={229} height={257} viewBox="0 0 229 257" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M201.9 196.9L154.7 222l-65.1 34.7H0l112.6-92.9-24 45.7 55.1-29.3-29.4-66.1-19.5 43.7-66.5 35.4L114.3 0l87.6 196.9zm-24.2 59.8l-11.9-26.9 41-21.9 21.7 48.8h-50.8z"
                fill="#6A40F3"
            />
        </Svg>
    );
}

export default Logo;
