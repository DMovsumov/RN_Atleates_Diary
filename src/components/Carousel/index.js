import React, { useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Wrapper, Images, MiddleWrap, Middle } from './styled.index';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSetActiveIndex = ({ nativeEvent }) => {
        setActiveSlide(Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width));
    };

    return (
        <Wrapper>
            <ScrollView
                pagingEnabled
                horizontal={true}
                onScroll={handleSetActiveIndex}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>
                {['', ''].map((item, index) => (
                    <Images
                        key={index + 'image' + index}
                        source={{ uri: 'https://sun1-22.userapi.com/ooi6yEvzBT9lFw9B__3kyNefG8cpt_fjouhH6Q/5bfRUiO4VMc.jpg' }}
                        style={{ width, height, resizeMode: 'cover' }}
                    />
                ))}
            </ScrollView>
            <MiddleWrap>
                {['', ''].map((item, index) => (
                    <Middle key={index} active={index === activeSlide} />
                ))}
            </MiddleWrap>
        </Wrapper>
    );
};

export default Carousel;
