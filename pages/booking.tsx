import type { NextPage } from 'next';
import FormContainer from '../components/page/booking/formContainer';
import InfoContainer from '../components/page/booking/infoContainer';
import styles from '../styles/booking.module.scss';

const Booking: NextPage = () => {
    return (
        <div className={styles.container}>
            <InfoContainer />
            <FormContainer />
        </div>
    );
};

export default Booking;
