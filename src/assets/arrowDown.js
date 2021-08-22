import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowDown({ drop }) {
    return (
        <>
            {!drop ? (
                <Svg width={18} height={14} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path
                        d="M.512 1.65a1.002 1.002 0 00.37.78L6.87 7.26a.997.997 0 001.268 0l5.989-5A1 1 0 0012.849.72L7.5 5.19 2.149.87a.997.997 0 00-1.637.78z"
                        fill="#AAB2BA"
                    />
                </Svg>
            ) : (
                <Svg width={18} height={14} viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path
                        d="M14.487 6.932c0-.156-.032-.311-.096-.453a1.042 1.042 0 00-.273-.364L8.129 1.052a.97.97 0 00-.634-.239.97.97 0 00-.634.239L.872 6.292a1.089 1.089 0 00-.13 1.478.968.968 0 001.407.136l5.351-4.684 5.35 4.528a.956.956 0 001.068.141c.172-.086.317-.222.418-.392.101-.17.153-.367.151-.567z"
                        fill="#AAB2BA"
                    />
                </Svg>
            )}
        </>
    );
}

export default ArrowDown;
