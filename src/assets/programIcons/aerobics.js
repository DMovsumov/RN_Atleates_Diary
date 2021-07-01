import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Aerobics({ color }) {
    return (
        <Svg width={35} height={39} viewBox="0 0 32 37" fill={color ? color : '#fff'} xmlns="http://www.w3.org/2000/svg">
            <Path d="M31.9 15.738a.527.527 0 00-.442-.262l-11.926-.314c.176-.105.337-.232.482-.377l1.057-1.057a2.483 2.483 0 10-3.512-3.51l-1.057 1.056a2.467 2.467 0 00-.689 1.331l-3.09-3.222a.527.527 0 10-.76.73l.67.7-.92.663-4.5-5.552c.194-.016.38-.085.538-.2l2.752 2.87a.528.528 0 00.761-.73L8.185 4.65 8.08 1.688a.694.694 0 00-1.259-.4L.57 10.035a2.94 2.94 0 00.076 3.507l4.021 5.672c.172.23.386.426.631.576-.015.14-.022.28-.02.421l.167 15.481A1.326 1.326 0 006.767 37h2.884a.958.958 0 00.456-1.8l-.044-.02-1.655-.709a.231.231 0 01-.137-.24l.57-4.48a.528.528 0 10-1.049-.132l-.084.665H6.442L6.333 20.2a2.672 2.672 0 01.051-.553c0-.013.006-.026.01-.039.11-.516.374-.986.757-1.349a.527.527 0 00-.728-.763 3.7 3.7 0 00-.83 1.187.704.704 0 01-.066-.078L1.5 12.921l-.017-.02a1.881 1.881 0 01-.054-2.252l2.725-3.812.6.476-1.65 3.1-.01.023a1.451 1.451 0 00.37 1.7l5.908 5.083-1.316 10.344a.527.527 0 00.457.59.576.576 0 00.067 0 .527.527 0 00.522-.46l.836-6.589h2.841c1.617 0 3.06-.135 4.326-1.788l.386-.436 11.941-.729h.012a2.927 2.927 0 001.992-1.037.562.562 0 00.06-.089l.414-.776a.527.527 0 00-.009-.514v.003zm-24.325 15.6l-.35 2.762a1.29 1.29 0 00.767 1.34l1.18.5H6.767a.268.268 0 01-.267-.264l-.047-4.343 1.122.005zM17.25 12.02l1.057-1.057a1.428 1.428 0 012.02 2.02l-1.057 1.056a1.428 1.428 0 01-2.02-2.019zM4.766 5.978l2.3-3.212.076 2.1a.011.011 0 01-.01.007H6.77a1.12 1.12 0 00-.156.012H6.57L6.54 4.9a1.183 1.183 0 00-.624.338l-.01.011-.014.005-.016.02-.007.006a1.177 1.177 0 00-.18.272l-.435.815-.488-.389zm-.723 4.91L6.36 6.544l6.191 7.637a2.475 2.475 0 01-2.429 2.293L4.15 11.335a.392.392 0 01-.105-.447zm13.164 6.957a.528.528 0 00-.363.177l-.543.614-.024.03c-.73.96-1.41 1.388-3.5 1.388h-2.706l.322-2.537A3.531 3.531 0 0013.611 14a.528.528 0 00-.118-.332L12.38 12.3l.992-.715 3.22 3.357a3.834 3.834 0 002.848 1.277l1.218.032.028 1.385-3.478.21zm12.154-.745l-7.623.466-.026-1.293 8.856.233a1.866 1.866 0 01-1.206.595z" />
        </Svg>
    );
}

export default Aerobics;