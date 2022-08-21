import Link from 'next/link';
import React from 'react';
import NueButton from './btn';
import styles from './styles.module.scss';

const UpcommingTourCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src='./assets/pexels.jpg' alt='' />
            </div>
            <div className={styles.right}>
                <h1>Mountabu</h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of
                </p>
                <Link href={'/'}>Read more</Link>
                <NueButton />
            </div>
        </div>
    );
};

export default UpcommingTourCard;
