import {
    useEffect,
    useState,
} from 'react';
const useCurrentTimeTask34 = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return time;
};
export default useCurrentTimeTask34;
