import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Logout({}) {
    return (
        <Svg width={25} height={25} viewBox="0 0 24 25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5 11.836h8v1.996H5v2.995l-5-3.993 5-3.992v2.994zm-1 6.987h2.708a8.006 8.006 0 008.583 1.29 7.997 7.997 0 003.43-2.947 7.975 7.975 0 00-3.43-11.61 8.013 8.013 0 00-8.583 1.29H4a10 10 0 015.018-3.54 10.018 10.018 0 016.144.059 9.999 9.999 0 014.95 3.633 9.97 9.97 0 010 11.673 9.999 9.999 0 01-4.95 3.633A10.017 10.017 0 014 18.824z" />
        </Svg>
    );
}

export default Logout;
