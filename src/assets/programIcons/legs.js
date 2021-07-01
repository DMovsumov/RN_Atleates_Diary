import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Legs({ color }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={39} viewBox="0 0 141.962 141.962" fill={color ? color : '#fff'}>
            <Path d="M116.57 1.352A3.119 3.119 0 00114 0H27.964a3.139 3.139 0 00-2.57 1.352c-.5.725-49.478 73.398-9.852 139.112a3.146 3.146 0 002.676 1.498h38.14c1.41 0 2.646-.938 3.002-2.289.429-1.608 7.712-28.668 11.615-49.603 3.903 20.935 11.186 47.994 11.624 49.603a3.111 3.111 0 003.008 2.289h38.137a3.165 3.165 0 002.686-1.498c39.608-65.714-9.361-138.387-9.86-139.112zM29.659 6.235h82.643c2.04 3.233 7.301 12.102 12.33 24.533-8.829 3.848-40.955 18.496-53.651 33.387-12.684-14.884-44.82-29.538-53.637-33.386 5.014-12.426 10.269-21.3 12.315-24.534zm24.293 129.492H19.996c-20.661-35.609-14.188-73.368-4.89-99.122 9.085 3.991 41.744 19.038 52.09 32.872-.013.122-.064.238-.058.365.743 12.179-10.418 55.387-13.186 65.885zm68.037 0H88.006c-2.765-10.498-13.932-53.706-13.177-65.885.006-.121-.052-.23-.064-.359 10.343-13.828 43.005-28.88 52.09-32.872 9.304 25.748 15.777 63.501-4.866 99.116zm-87.172-9.316a3.12 3.12 0 01-.73 4.336 3.09 3.09 0 01-1.809.578c-.971 0-1.939-.444-2.536-1.309-16.499-23.23-11.125-62.116-10.894-63.76.244-1.711 1.851-2.856 3.529-2.646a3.121 3.121 0 012.643 3.529c-.055.381-5.243 38.082 9.797 59.272zm77.399 3.605a3.088 3.088 0 01-2.539 1.309c-.627 0-1.26-.177-1.809-.578a3.112 3.112 0 01-.73-4.336c15.071-21.215 9.858-58.876 9.804-59.266a3.121 3.121 0 012.643-3.528c1.662-.21 3.276.929 3.532 2.646.231 1.637 5.613 40.529-10.901 63.753z" />
        </Svg>
    );
}

export default Legs;