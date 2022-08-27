import Image from 'next/image';
import React, { useEffect } from 'react';
import NavBtn from '../../UI/NavBtn/Index';
import styles from './navbar.module.css';
import {
    AiOutlineHome,
    AiOutlineInfo,
    AiOutlinePhone,
    AiOutlineCompass,
} from 'react-icons/ai';
import { RiLoginBoxLine, RiTeamLine } from 'react-icons/ri';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    useEffect(() => {
        if (session == null) return;
        console.log('session.jwt', session.jwt);
    }, [session]);
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
                    <NavBtn Icon={AiOutlineHome} Label='Home' page_link='/' />
                </li>
                <li>
                    <NavBtn
                        Icon={AiOutlineInfo}
                        Label='About us'
                        page_link='/about-us'
                    />
                </li>
                <li>
                    <NavBtn Icon={RiTeamLine} Label='Team' page_link='/team' />
                </li>
                <li>
                    <NavBtn
                        Icon={AiOutlineCompass}
                        Label='Tours'
                        page_link='/tours'
                    />
                </li>
                <li>
                    <NavBtn
                        Icon={AiOutlinePhone}
                        Label='Phone'
                        page_link='/contact'
                    />
                </li>
                <li style={{ marginLeft: '4rem' }}>
                    {session ? (
                        <button
                            onClick={() => {
                                signOut();
                            }}
                        >
                            signOut
                        </button>
                    ) : (
                        <NavBtn
                            Icon={RiLoginBoxLine}
                            Label='Login'
                            page_link='/login'
                        />
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
