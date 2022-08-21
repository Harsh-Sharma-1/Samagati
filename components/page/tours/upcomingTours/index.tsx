import React from 'react';

import styles from './styles.module.scss';
import UpcommingTourCard from '../upcommingtourcard';

const UpcommingTours = () => {
    return (
        <div className={styles.container}>
            <h1>Upcoming Voyages and events</h1>
            <div className={styles.gridContainer}>
                <UpcommingTourCard />
                <UpcommingTourCard />
                <UpcommingTourCard />
                <UpcommingTourCard />
            </div>
        </div>
    );
};

export default UpcommingTours;
