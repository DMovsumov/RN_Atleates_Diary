import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Profile = ({ color, width, height }) => {
    return (
        <Svg width={width || 30} height={height || 30} viewBox="0 0 22 20" fill={color || '#C4C4C4'}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.626 12.513c2.825 0 5.128-2.76 5.128-6.154 0-3.395-2.303-6.154-5.128-6.154C7.8.205 5.497 2.964 5.497 6.36s2.308 6.154 5.129 6.154zm0-10.77c1.984 0 3.59 2.052 3.59 4.616 0 2.564-1.606 4.615-3.59 4.615-1.985 0-3.59-2.051-3.59-4.615s1.605-4.615 3.59-4.615z"
                fill={color || '#C4C4C4'}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.318 12a.773.773 0 00-.154 1.538 4.995 4.995 0 014.4 4.616H1.687a5.036 5.036 0 014.4-4.616A.773.773 0 105.933 12c-.056 0-5.82.656-5.82 6.918 0 .425.344.77.769.77h19.487a.77.77 0 00.77-.77c0-6.262-5.765-6.918-5.821-6.918z"
                ffill={color || '#C4C4C4'}
            />
        </Svg>
    );
};

export default Profile;
