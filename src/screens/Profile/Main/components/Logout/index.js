import React from 'react';
import { LogoutBlock, LogoutWrapper, Texts } from './styled.index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logout from '../../../../../assets/icons/logout';

const LogoutBtn = ({ logOut }) => {
    const insets = useSafeAreaInsets();

    return (
        <LogoutWrapper style={{ marginTop: insets.top }}>
            <LogoutBlock onPress={logOut}>
                <Logout />
                <Texts>Log out</Texts>
            </LogoutBlock>
        </LogoutWrapper>
    );
};

export default LogoutBtn;
