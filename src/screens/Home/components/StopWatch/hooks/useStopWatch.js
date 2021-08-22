import { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer } from '../../../../../redux/actions/home';

const useStopWatch = () => {
    const dispatch = useDispatch();
    const interval = useRef(null);
    const [status, setStatus] = useState('');
    const [time, setTime] = useState({
        h: 0,
        min: 0,
        sec: 0,
    });

    const updateTime = {
        h: time.h,
        min: time.min,
        sec: time.sec,
    };

    const start = () => {
        setStatus('isStart');
        runningTime();
        const intervalId = setInterval(runningTime, 1000);
        interval.current = intervalId;
    };

    const stop = () => {
        setStatus('isStop');
        clearInterval(interval.current);
    };

    const reset = () => {
        setStatus('');
        clearInterval(interval.current);
        setTime({
            h: 0,
            min: 0,
            sec: 0,
        });
        interval.current = null;
    };

    const runningTime = () => {
        if (updateTime.min === 60) {
            updateTime.h++;
            updateTime.min = 0;
        }
        if (updateTime.sec === 60) {
            updateTime.min++;
            updateTime.sec = 0;
        }
        updateTime.sec++;
        return setTime({ ...updateTime });
    };

    useEffect(() => {
        dispatch(
            setTimer(
                `${time.h >= 10 ? time.h : '0' + time.h}` +
                    ':' +
                    `${time.min >= 10 ? time.min : '0' + time.min}` +
                    ':' +
                    `${time.sec >= 10 ? time.sec : '0' + time.sec}`,
            ),
        );
    }, [time]);

    return {
        time,
        status,
        start,
        stop,
        reset,
    };
};

export default useStopWatch;
