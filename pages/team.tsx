import { NextPage } from 'next';
import React, { useState } from 'react';
import TeamMemberImage from '../components/UI/TeamMemberImage';
import styles from '../styles/Team.module.css';

const members = [
    {
        name: 'Rajesh Sharma',
        image: './assets/Avatar1.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Adhyaksh',
    },
    {
        name: 'Ramesh Sharma',
        image: './assets/Avatar2.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Upadhyaksh',
    },
    {
        name: 'Dinesh Sharma',
        image: './assets/Avatar3.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Sachiv',
    },
    {
        name: 'Sushila Sharma',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG/1200px-Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Adhyaksh ki wife',
    },
    {
        name: 'Sangeeta Sharma',
        image: 'https://pbs.twimg.com/media/FUltEFDaAAAyCgd?format=jpg&name=large',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Upadhyaksh ki wife',
    },
    {
        name: 'Pushpa Sharma',
        image: './assets/Avatar6.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Sachiv ki wife',
    },
];

const Team: NextPage = () => {
    const [memberIndex, setMemberIndex] = useState(0);

    const handleClick = (value: number) => {
        setMemberIndex(value);
    };

    return (
        <div className={styles.container}>
            <div
                className={
                    styles.textContainer + ' top-margin-high primary-color'
                }
            >
                <h1>Our Beloved Team</h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that
                </p>
            </div>
            <div
                className={
                    styles.members +
                    ' top-margin-high high-padding high-corner medium-shadow'
                }
            >
                <TeamMemberImage {...members[memberIndex]} />
                <div>
                    <button
                        onClick={(e) => {
                            handleClick(0);
                        }}
                    >
                        Rajesh
                    </button>
                    <button
                        onClick={(e) => {
                            handleClick(1);
                        }}
                    >
                        Ramesh
                    </button>
                    <button
                        onClick={(e) => {
                            handleClick(2);
                        }}
                    >
                        Dinesh
                    </button>
                    <button
                        onClick={(e) => {
                            handleClick(3);
                        }}
                    >
                        Susila
                    </button>
                    <button
                        onClick={(e) => {
                            handleClick(4);
                        }}
                    >
                        Sangeeta
                    </button>
                    <button
                        onClick={(e) => {
                            handleClick(5);
                        }}
                    >
                        Pushpa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Team;
