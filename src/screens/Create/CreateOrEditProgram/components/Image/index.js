import React from 'react';
import { StyleSheet } from 'react-native';
import { BackWrapper, ImageWrapper, Upload, Wrapper } from './styled.index';
import UploadFile from '../../../../../assets/uploadFile';
import ArrowBack from '../../../../../assets/arrowBack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useImage from './hooks/useImage';

const Image = ({ img, navigation }) => {
    const insets = useSafeAreaInsets();
    const { imagePickerHandle } = useImage();

    const goBack = () => navigation.goBack();

    return (
        <Wrapper onPress={imagePickerHandle}>
            {img ? (
                <ImageWrapper source={{ uri: img }} imageStyle={styles.image} />
            ) : (
                <Upload>
                    <UploadFile />
                </Upload>
            )}
            <BackWrapper top={insets.top + 'px'} onPress={goBack}>
                <ArrowBack />
            </BackWrapper>
        </Wrapper>
    );
};

export default Image;

const styles = StyleSheet.create({
    image: {
        borderBottomLeftRadius: 50,
        opacity: 0.7,
    },
});
