import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import NueButton from './btn';
import styles from './styles.module.scss';

type props = {
    name: string;
    description: string;
    imageLink: string;
    slug: string;
};
const UpcommingTourCard: React.FC<props> = ({
    name,
    description,
    imageLink,
    slug,
}) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    
                </div>
                <img src={imageLink} alt='' />
            </div>
            <div className={styles.right}>
                <h1>{name}</h1>
                <p>{description}</p>
                <Link href={'/'}>Read more</Link>
                <NueButton
                    onClick={() => {
                        router.push(`/booking/${slug}`);
                    }}
                />
            </div>
        </div>
    );
};

export default UpcommingTourCard;
