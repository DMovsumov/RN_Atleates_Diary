import React from 'react';
import { Wrapper, FlatListBlock } from './styled.index';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProgramLayout = ({ HeaderComponent, FooterComponent, data, renderItem, separator }) => {
    const insets = useSafeAreaInsets();
    const { theme } = useSelector(({ global }) => global);

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
        </Wrapper>
    );
};

export default ProgramLayout;
