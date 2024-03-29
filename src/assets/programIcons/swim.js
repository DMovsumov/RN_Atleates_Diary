import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Swim({ color }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={39} fill={color ? color : '#fff'} viewBox="0 0 96 96">
            <Path d="M68.5 27c-6.2 2.5-9.1 10.8-6 17.4 2.2 4.5 5.9 6.6 12.1 6.6 3.9 0 5.1-.5 8-3.4 3-3 3.4-4 3.4-8.5 0-5.9-1.9-9.5-6.1-11.7-3.1-1.5-8.2-1.8-11.4-.4zM21 32.9C10 38 8.5 39 8.2 41.4c-.2 1.6.2 2.8 1.1 3.2.8.3 6.8-.9 13.2-2.6 6.4-1.7 11.8-3 11.9-2.8.2.2 1.5 2.4 3 5l2.7 4.6-7.1 5.8c-3.8 3.2-7 6.2-7 6.6 0 1.5 8.7.9 10-.7 1.6-1.9 7-1.9 9.6 0 2.5 1.9 10.8 2 12.4.1.6-.8 3-1.6 5.2-1.8l4.1-.3-14.9-15.8C42.3 32 36.9 27 35.5 27.1c-1.1 0-7.6 2.7-14.5 5.8zM81.5 65c-3.6 2.4-11.2 2.7-14.1.5-2.4-1.8-6.4-1.8-8.8 0-2.5 1.9-10.7 1.9-13.2 0-2.4-1.8-6.4-1.8-8.8 0-2.5 1.9-10.7 1.9-13.2 0-1-.8-3.1-1.5-4.6-1.5-2.4 0-2.8.4-2.8 3 0 2.5.7 3.3 4.1 5.1 3.5 1.7 5.3 2 11.3 1.5 3.9-.3 8.3-.6 9.9-.5h21.5c1.5-.1 5.9.2 9.8.5 6 .5 7.8.2 11.2-1.5 3.3-1.7 5.2-3.7 5.2-5.6 0-.6-3.1-3.5-3.8-3.5-.4 0-2 .9-3.7 2z" />
        </Svg>
    );
}

export default Swim;
