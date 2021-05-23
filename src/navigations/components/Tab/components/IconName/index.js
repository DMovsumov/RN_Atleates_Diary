import React, { memo } from 'react';
import Home from '../../../../../assets/icons/home';
import Programs from '../../../../../assets/icons/programs';
import Plus from '../../../../../assets/icons/plus';
import Recommendation from '../../../../../assets/icons/recommendation';
import Profile from '../../../../../assets/icons/profile';

const IconName = ({ name, focused, color, size }) => {
    switch (name) {
        case 'Home':
            return <Home color={color} width={focused ? size + 3 : size} height={focused ? size + 3 : size} />;
        case 'Programs':
            return <Programs color={color} width={focused ? size + 3 : size} height={focused ? size + 3 : size} />;
        case 'Create':
            return <Plus color={color} size={size} width={focused ? size + 3 : size} height={focused ? size + 3 : size} />;
        case 'Recommendation':
            return <Recommendation color={color} width={focused ? size + 3 : size} height={focused ? size + 3 : size} />;
        case 'Profile':
            return <Profile color={color} width={focused ? size + 3 : size} height={focused ? size + 3 : size} />;
    }
};

export default memo(IconName);
