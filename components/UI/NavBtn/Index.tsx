import { useRouter } from 'next/router';
import React from 'react';
import styles from './navbtn.module.css';
type props = {
    Label: string;
    Icon: any;
    page_link: string;
};

const NavBtn: React.FC<props> = (Props: props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(Props.page_link);
    };
    return (
        <div className={styles.container} onClick={handleClick}>
            <Props.Icon className={styles.navBtnIcon} />
            <span className={styles.navBtnText}>{Props.Label}</span>
        </div>
    );
};

export default NavBtn;
