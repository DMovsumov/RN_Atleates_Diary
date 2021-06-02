import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Language({ color }) {
    return (
        <Svg width={27} height={27} viewBox="0 0 32 32" fill={color || '#fff'} xmlns="http://www.w3.org/2000/svg">
            <Path d="M15.504 4.66c6.031 0 10.939 4.907 10.939 10.939s-4.908 10.94-10.94 10.94c-6.032 0-10.94-4.908-10.94-10.94 0-6.032 4.908-10.94 10.94-10.94zm-8.925 9.958h4.06c.276-3.045 1.762-5.97 2.865-7.773-3.68.84-6.507 3.95-6.925 7.773zm6.03 0h5.808c-.317-2.888-1.928-5.746-2.912-7.262-.98 1.514-2.58 4.368-2.895 7.262zm4.9-7.771c1.11 1.802 2.602 4.727 2.88 7.77h4.039c-.418-3.82-3.24-6.927-6.918-7.77zm6.919 9.732h-4.039c-.278 3.044-1.77 5.97-2.88 7.771 3.678-.842 6.502-3.95 6.919-7.77zm-8.921 7.263c.984-1.514 2.594-4.369 2.91-7.262H12.61c.316 2.887 1.917 5.745 2.897 7.262zm-2.003.51c-1.103-1.802-2.589-4.727-2.866-7.772H6.58c.418 3.822 3.244 6.932 6.925 7.772z" />
            <Path d="M4.588 4.588A15.563 15.563 0 0115.666 0c4.184 0 8.118 1.63 11.077 4.588a15.7 15.7 0 014.501 9.43 15.74 15.74 0 01-2.082 9.606L32 32l-8.376-2.838a15.739 15.739 0 01-9.606 2.082 15.7 15.7 0 01-9.43-4.501A15.563 15.563 0 010 15.666C0 11.48 1.63 7.547 4.588 4.588zm1.387 20.768c4.493 4.492 11.644 5.291 17.005 1.9l.396-.25 5.491 1.861-1.86-5.49.25-.397c3.39-5.36 2.59-12.512-1.901-17.005-5.343-5.343-14.037-5.343-19.38 0-5.344 5.344-5.344 14.037 0 19.38z" />
        </Svg>
    );
}

export default Language;
