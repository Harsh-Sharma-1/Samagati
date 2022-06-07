import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import styles from './navbtn.module.css';
type props = {
    Label: String;
    Icon: any;
};

const NavBtn: React.FC<props> = (Props: props) => {
    return (
        <div className={styles.container}>
            <Props.Icon className={styles.navBtnIcon} />
            <span className={styles.navBtnText}>{Props.Label}</span>
        </div>
    );
};

export default NavBtn;
