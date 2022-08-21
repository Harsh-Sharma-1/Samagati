import React, { useState } from 'react';
import TeamMemberImage from '../teammemberimage';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size';

const members = [
    {
        name: 'Alex',
        image: './assets/Avatar1.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Adhyaksh',
    },
    {
        name: 'James',
        image: './assets/Avatar2.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Upadhyaksh',
    },
    {
        name: 'Dhruv',
        image: './assets/Avatar3.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Sachiv',
    },
    {
        name: 'Scarlett',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG/1200px-Goldene_Kamera_2012_-_Scarlett_Johansson_3_%28cropped%2C_2%29.JPG',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Adhyaksh ki wife',
    },
    {
        name: 'Priyanka',
        image: 'https://pbs.twimg.com/media/FUltEFDaAAAyCgd?format=jpg&name=large',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Upadhyaksh ki wife',
    },
    {
        name: 'Ana ',
        image: './assets/Avatar6.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Sachiv ki wife',
    },
];

const Corousal: React.FC<any> = () => {
    const [memberIndex, setMemberIndex] = useState(0);

    const width = useWindowWidth();
    const height = useWindowHeight();

    let slidesToShow = 5;
    if (width > 1200) {
        slidesToShow = 5;
    } else if (width > 1000) {
        slidesToShow = 4;
    } else if (width > 800) {
        slidesToShow = 3;
    } else if (width > 600) {
        slidesToShow = 2;
    } else {
        slidesToShow = 1;
    }

    console.log(width, height);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 5,
        arrows: true,
    };
    return (
        <div>
            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
                <div>
                    <TeamMemberImage {...members[memberIndex]} />
                </div>
            </Slider>
        </div>
    );
};

const CardList = () => {
    return (
        <div
            className={
                styles.members +
                ' top-margin-high high-padding high-corner medium-shadow'
            }
        >
            <Corousal />
            <Corousal />
        </div>
    );
};

export default CardList;
