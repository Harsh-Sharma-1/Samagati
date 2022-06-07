import Image from 'next/image';
import React from 'react';
import NavBtn from '../../UI/NavBtn/Index';
import styles from './navbar.module.css';
import {
    AiOutlineHome,
    AiOutlineInfo,
    AiOutlineTeam,
    AiOutlinePhone,
    AiOutlineCompass,
} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Image
                src='/assets/Logo.png'
                width={186}
                height={43}
                alt='Samagati'
            />
            <ul className={styles.NavList}>
                <li>
                    <NavBtn Icon={AiOutlineHome} Label='Home' />
                </li>
                <li>
                    <NavBtn Icon={AiOutlineInfo} Label='About us' />
                </li>
                <li>
                    <NavBtn Icon={AiOutlineTeam} Label='our team' />
                </li>
                <li>
                    <NavBtn Icon={AiOutlineCompass} Label='Tours' />
                </li>
                <li>
                    <NavBtn Icon={AiOutlinePhone} Label='Phone' />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
