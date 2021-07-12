import React from 'react';
import { Wrapper, FlatListBlock } from './styled.index';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Message from '../../components/Message';

const ProgramLayout = ({ HeaderComponent, FooterComponent, data, renderItem, separator }) => {
    const insets = useSafeAreaInsets();
    const { theme, message } = useSelector(({ global }) => global);

    return (
        <Wrapper theme={theme}>
            <FlatListBlock
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                ItemSeparatorComponent={separator}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.title.en + index}
            />
            {message.text !== '' && <Message type={message.type} duration={5} text={message.text} />}
        </Wrapper>
    );
};

export default ProgramLayout;
