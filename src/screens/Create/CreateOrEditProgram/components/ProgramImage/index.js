import React from 'react';
import { StyleSheet } from 'react-native';
import { ImageWrapper, Upload, Wrapper } from './styled.index';
import UploadFile from '../../../../../assets/uploadFile';

const ProgramImage = ({ img }) => (
    <Wrapper>
        {img ? (
            <ImageWrapper source={{ uri: img }} imageStyle={styles.image} />
        ) : (
            <Upload>
                <UploadFile />
            </Upload>
        )}
    </Wrapper>
);

export default ProgramImage;

const styles = StyleSheet.create({
    image: {
        borderBottomLeftRadius: 50,
        opacity: 0.7,
    },
});
