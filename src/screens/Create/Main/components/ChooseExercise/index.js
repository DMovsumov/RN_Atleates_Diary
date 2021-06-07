import React from 'react';
import { StyleSheet } from 'react-native';
import { Wrapper, ImageBc, Texts } from './styled.index';
import { useSelector } from 'react-redux';

const ChooseExercise = ({ img, title, subTitle, onPress }) => {
    const { theme } = useSelector(({ global }) => global);

    return (
        <Wrapper onPress={onPress} bc={theme !== 'dark'}>
            <ImageBc
                source={{
                    uri: img,
                }}
                imageStyle={styles.main}>
                <Texts>{title}</Texts>
                {subTitle && <Texts fs={16}>{subTitle}</Texts>}
            </ImageBc>
        </Wrapper>
    );
};

export default ChooseExercise;

const styles = StyleSheet.create({
    main: {
        opacity: 0.5,
        borderRadius: 10,
    },
});
