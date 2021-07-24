import React from 'react';
import { TextBlock, Wrapper, WelcomeText } from './styled.index';
import useWelcome from './hooks/useWelcome';

const Welcome = () => {
    const { title, texts } = useWelcome();
    const { homeWelcomeTitle, homeWelcomeSubtitle } = texts;

    return (
        <Wrapper>
            <TextBlock>
                <WelcomeText bold>{homeWelcomeTitle + ', '}</WelcomeText>
                <WelcomeText bold>{title}</WelcomeText>
            </TextBlock>
            <WelcomeText>{homeWelcomeSubtitle}</WelcomeText>
        </Wrapper>
    );
};

export default Welcome;
