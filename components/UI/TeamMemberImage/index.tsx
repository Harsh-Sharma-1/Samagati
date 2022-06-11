/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './teammemberimage.module.css';

type props = {
    image: string;
    name: string;
    role: string;
    bio: string;
};

const TeamMemberImage: React.FC<props> = (Props: props) => {

    return (
        <div className={styles.container}>
            <img src={Props.image} alt={Props.name} />
            <div>
                <h1>{Props.name}</h1>
                <h2>{Props.role}</h2>
                <p>{Props.bio}</p>
            </div>
        </div>
    );
};

export default TeamMemberImage;
