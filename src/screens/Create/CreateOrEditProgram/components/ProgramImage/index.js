import React from 'react';
import { StyleSheet } from 'react-native';
import { BackWrapper, ImageWrapper, Upload, Wrapper } from './styled.index';
import UploadFile from '../../../../../assets/uploadFile';
import ArrowBack from '../../../../../assets/arrowBack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProgramImage = ({ img, navigation }) => {
    const insets = useSafeAreaInsets();

    const goBack = () => navigation.goBack();

    return (
        <Wrapper>
            {img ? (
                <ImageWrapper source={{ uri: img }} imageStyle={styles.image} />
            ) : (
                <Upload>
                    <UploadFile />
                </Upload>
            )}
            <BackWrapper top={insets.top} onPress={goBack}>
                <ArrowBack />
            </BackWrapper>
        </Wrapper>
    );
};

export default ProgramImage;

const styles = StyleSheet.create({
    image: {
        borderBottomLeftRadius: 50,
        opacity: 0.7,
    },
});
