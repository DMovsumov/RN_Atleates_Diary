import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function DeleteIcon({ color }) {
    return (
        <Svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx={12} cy={12} r={12} fill={color || '#d93a60'} />
            <Path fill="#fff" d="M8.359 7.68l8.403 8.403-.679.679L7.68 8.358z" />
            <Path fill="#fff" d="M16.762 8.36l-8.404 8.403-.678-.679 8.403-8.403z" />
        </Svg>
    );
}

export default DeleteIcon;
