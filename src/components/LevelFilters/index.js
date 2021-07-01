import React from 'react';
import { ActiveLineWrapper, Content, Wrapper, TextsFilter, Line, TextTitle } from './styled.index';
import useTranslates from '../../i18n/useTranslates';

const ActiveLine = ({ title, active, setActive }) => {
    const text = useTranslates(title);
    const titles = Object.values(text);

    return (
        <ActiveLineWrapper onPress={setActive}>
            <TextsFilter text={titles[0]} color={active ? '#FFFFFF' : '#AAB2BA'} />
            {active && <Line />}
        </ActiveLineWrapper>
    );
};

const LevelFilters = ({ filters, active, title, setActive, typeStyle }) => {
    return (
        <Wrapper>
            <TextTitle text={title} typeStyle={typeStyle} />
            <Content typeStyle={typeStyle}>
                {filters.map((item, index) => (
                    <ActiveLine
                        key={item.item + index}
                        title={item.title}
                        setActive={() => setActive(item.item)}
                        active={active === item.item}
                    />
                ))}
            </Content>
        </Wrapper>
    );
};

export default LevelFilters;
