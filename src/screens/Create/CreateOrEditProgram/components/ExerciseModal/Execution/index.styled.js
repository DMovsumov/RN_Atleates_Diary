import styled from 'styled-components/native';

export const Wrapper = styled.Pressable`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(34, 35, 50, 0.4);
    justify-content: center;
`;

export const BlockSets = styled.View`
    width: 85%;
    padding: 10px 5% 15px 5%;
    background-color: #222332;
    align-self: center;
`;

export const BlockButton = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const BlockInput = styled.View`
    width: 85%;
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;
