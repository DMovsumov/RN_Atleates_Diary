import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import ButtonWatch from './Button';
import { Wrapper, LinearWrap, ControlWrap, TextTimer, TextTitle, Controllers, Separator } from './styled.index';
import useStopWatch from './hooks/useStopWatch';

const StopWatch = () => {
    const { time, status, start, stop, reset } = useStopWatch();

    return (
        <Wrapper>
            <TextTitle bold>Today’s Progress:</TextTitle>
            <TextTitle style={{ fontSize: 16, marginBottom: 15 }}>Step by Step you can feel your Health Level.</TextTitle>
            <LinearWrap colors={['#7454FE', '#591ADE']}>
                <ControlWrap>
                    <TextTimer>
                        {`${time.h >= 10 ? time.h : '0' + time.h}` +
                            ':' +
                            `${time.min >= 10 ? time.min : '0' + time.min}` +
                            ':' +
                            `${time.sec >= 10 ? time.sec : '0' + time.sec}`
                        }
                    </TextTimer>
                    <Controllers>
                        <ButtonWatch title={'Start'} handlePress={start} disabled={status === 'isStart'} />
                        <Separator />
                        <ButtonWatch title={'Stop'} handlePress={stop} disabled={status === 'isStop'} />
                        <Separator />
                        <ButtonWatch title={'Reset'} handlePress={reset} disabled={status === 'isReset'} />
                    </Controllers>
                </ControlWrap>
                <ProgressCircle radius={50} percent={30} borderWidth={7} color="#fff" shadowColor="#927FEB" bgColor="rgba(109, 84, 228, 1)">
                    <TextTimer>30%</TextTimer>
                </ProgressCircle>
            </LinearWrap>
        </Wrapper>
    );
};

export default StopWatch;
