import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function CloseEye(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <G clipPath="url(#prefix__clip0)" fill="#fff">
                <Path d="M316.332 195.662c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.944 0 15.083c12.075 12.075 18.752 28.139 18.752 45.248 0 35.285-28.715 64-64 64-17.109 0-33.173-6.656-45.248-18.752-4.16-4.16-10.923-4.16-15.083 0-4.16 4.139-4.16 10.923 0 15.083 16.085 16.128 37.525 25.003 60.331 25.003 47.061 0 85.333-38.272 85.333-85.333 0-22.807-8.874-44.247-25.002-60.332zM270.87 172.131c-4.843-.853-9.792-1.472-14.869-1.472-47.061 0-85.333 38.272-85.333 85.333 0 5.077.619 10.027 1.493 14.869.917 5.163 5.419 8.811 10.475 8.811.619 0 1.237-.043 1.877-.171 5.781-1.024 9.664-6.571 8.64-12.352-.661-3.627-1.152-7.317-1.152-11.157 0-35.285 28.715-64 64-64 3.84 0 7.531.491 11.157 1.131 5.675 1.152 11.328-2.859 12.352-8.64 1.024-5.781-2.858-11.328-8.64-12.352z" />
                <Path d="M509.462 249.102c-2.411-2.859-60.117-70.208-139.712-111.445-5.163-2.709-11.669-.661-14.379 4.587-2.709 5.227-.661 11.669 4.587 14.379 61.312 31.744 110.293 81.28 127.04 99.371-25.429 27.541-125.504 128-230.997 128-35.797 0-71.872-8.64-107.264-25.707-5.248-2.581-11.669-.341-14.229 4.971-2.581 5.291-.341 11.669 4.971 14.229 38.293 18.496 77.504 27.84 116.523 27.84 131.435 0 248.555-136.619 253.483-142.443 3.369-3.969 3.348-9.793-.023-13.782zM325.996 118.947c-24.277-8.171-47.829-12.288-69.995-12.288-131.435 0-248.555 136.619-253.483 142.443-3.115 3.669-3.371 9.003-.597 12.992 1.472 2.112 36.736 52.181 97.856 92.779a10.48 10.48 0 005.888 1.792c3.435 0 6.827-1.664 8.875-4.8 3.264-4.885 1.92-11.52-2.987-14.763-44.885-29.845-75.605-65.877-87.104-80.533 24.555-26.667 125.291-128.576 231.552-128.576 19.861 0 41.131 3.755 63.189 11.157 5.589 2.005 11.648-1.088 13.504-6.699 1.878-5.589-1.109-11.626-6.698-13.504z" />
                <Path d="M444.865 67.128c-4.16-4.16-10.923-4.16-15.083 0L67.116 429.795c-4.16 4.16-4.16 10.923 0 15.083a10.716 10.716 0 007.552 3.115c2.731 0 5.461-1.045 7.531-3.115L444.865 82.211c4.16-4.16 4.16-10.923 0-15.083z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h512.001v512.001H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default CloseEye;
