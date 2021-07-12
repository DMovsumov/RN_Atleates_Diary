import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Warning({}) {
    return (
        <Svg width={30} height={30} viewBox="0 0 24 24" fill="#F3EFEC" xmlns="http://www.w3.org/2000/svg">
            <Path d="M23.753 19.564L13.594 1.923a1.84 1.84 0 00-3.188 0L.246 19.563a1.85 1.85 0 000 1.847 1.84 1.84 0 001.595.923H22.16a1.84 1.84 0 001.594-.923 1.851 1.851 0 000-1.846zm-21.912.923L12 2.847l10.159 17.64H1.84z" />
            <Path d="M10.728 8.795l.528 6.061a.75.75 0 001.493 0l.527-6.061a1.28 1.28 0 10-2.549 0zM12.001 19.033c.583 0 1.056-.474 1.056-1.06 0-.584-.473-1.058-1.056-1.058-.583 0-1.056.474-1.056 1.059s.473 1.059 1.056 1.059z" />
        </Svg>
    );
}

export default Warning;
