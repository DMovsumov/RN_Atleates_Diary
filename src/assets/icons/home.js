import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Home = ({ color, width, height }) => {
    return (
        <Svg width={width || 30} height={height || 30} viewBox="0 0 22 20" fill={color || '#C4C4C4'}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.811 8.154L11.61.347a1.464 1.464 0 00-1.893 0L.515 8.154a1.464 1.464 0 00.878 2.576v7.806c0 .809.655 1.464 1.463 1.464H18.47c.809 0 1.464-.655 1.464-1.464v-7.801a1.464 1.464 0 00.878-2.576v-.005zM10.175 18.54h-.976V14.15h2.928v4.391h-1.952zm8.294-9.27v9.27H13.59V14.15c0-.808-.655-1.464-1.463-1.464H9.199c-.808 0-1.464.656-1.464 1.464v4.391H2.856v-9.27H1.461l9.202-7.806 9.202 7.806h-1.396z"
                fill={color || '#C4C4C4'}
            />
        </Svg>
    );
};

export default Home;
