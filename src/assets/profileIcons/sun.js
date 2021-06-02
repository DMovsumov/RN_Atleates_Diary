import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Sun(props) {
    return (
        <Svg width={26} height={27} viewBox="0 0 24 25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 6.42a1 1 0 001-.999V3.425a.997.997 0 00-1-.998 1 1 0 00-1 .998V5.42a.997.997 0 001 .998zM21 11.41h-2a1 1 0 00-1 .998.997.997 0 001 .998h2a1 1 0 001-.998.997.997 0 00-1-.998zM6 12.408a.997.997 0 00-1-.998H3a1 1 0 00-1 .998.997.997 0 001 .998h2a1.001 1.001 0 001-.998zM6.22 5.421a1.013 1.013 0 00-1.685.768c.003.262.11.513.295.7l1.44 1.387a1.023 1.023 0 001.732-.72 1.02 1.02 0 00-.282-.718l-1.5-1.417zM17 8.555a1 1 0 00.69-.279l1.44-1.387a.997.997 0 00-.648-1.686 1.001 1.001 0 00-.702.218L16.338 6.84a1.016 1.016 0 00.66 1.716H17zM12 18.398a1 1 0 00-1 .998v1.996a.997.997 0 001 .998 1 1 0 001-.998v-1.996a.997.997 0 00-1-.998zM17.73 16.54a1.002 1.002 0 00-1.695.737.998.998 0 00.305.701l1.44 1.418a1.01 1.01 0 001.695-.735c0-.262-.102-.514-.285-.703l-1.46-1.417zM6.27 16.541L4.83 17.93a1.01 1.01 0 00.673 1.722c.263.011.52-.08.717-.255l1.44-1.387a.998.998 0 00-.677-1.718 1.002 1.002 0 00-.713.28v-.03zM12 8.416a4.005 4.005 0 00-3.696 2.465 3.986 3.986 0 00.868 4.35 4.002 4.002 0 004.359.866A3.998 3.998 0 0016 12.41a3.989 3.989 0 00-1.172-2.824A4.004 4.004 0 0012 8.416zm0 5.989a2.003 2.003 0 01-1.848-1.232 1.994 1.994 0 011.458-2.722 2.004 2.004 0 012.053.849 1.993 1.993 0 01-.249 2.52 2.002 2.002 0 01-1.414.585z" />
        </Svg>
    );
}

export default Sun;