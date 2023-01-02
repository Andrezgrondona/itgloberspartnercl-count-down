import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './count/useCountdown';
import styles from './styles.css'

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
        <div className={styles.showcounter}>

            <DateTimeDisplay value={days} type={'Dias'} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Horas'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Minutos'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Segundos'} isDanger={false} />

        </div>
    );
};

const CountdownTimer = ({ targetDate }: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
