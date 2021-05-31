import React from 'react';
import { BlockView, Images } from './styled.index';
import Touches from '../../../../../components/Touches';
import useProfileImage from './hooks/useProfileImage';

const ProfileImage = () => {
    const {
        imagePickerHandle,
        texts: { profileMyaccountTitleChangephoto },
    } = useProfileImage();

    return (
        <BlockView>
            <Images source={{ uri: 'https://sun1-22.userapi.com/ooi6yEvzBT9lFw9B__3kyNefG8cpt_fjouhH6Q/5bfRUiO4VMc.jpg' }} />
            <Touches title={profileMyaccountTitleChangephoto} style={{ color: '#6A40F3', fontSize: 18 }} onPress={imagePickerHandle} />
        </BlockView>
    );
};

export default ProfileImage;
