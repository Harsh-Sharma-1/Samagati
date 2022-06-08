import React, { useState } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/Layout/Navbar';
import styles from '../styles/Contact.module.css';
import TextAreaBox from '../components/UI/TextAreaBox';
import NueButton from '../components/UI/NueButton';
import FloatingBtn from '../components/UI/Floatingbtn';
import {
    AiOutlineInstagram,
    AiFillLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import SocialMediaBtn from '../components/UI/SocialMediaBtn';

const Contact: NextPage = () => {
    const [question, setQuestion] = useState<string>('');
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Start talking!</h1>
                    <h3>Ask your questions</h3>
                    <TextAreaBox
                        placeholder='Enter question here...'
                        onChange={setQuestion}
                    />
                    <NueButton />
                    <div className={styles.iconContainer}>
                        <SocialMediaBtn icon={AiOutlineInstagram} />
                        <SocialMediaBtn icon={AiFillLinkedin} />
                        <SocialMediaBtn icon={AiOutlineMail} />
                        <SocialMediaBtn icon={FiTwitter} />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>Samagati Office</h1>
                    <p>
                        Avantika University, Vishwanathpuram, Lekoda, Madhya
                        Pradesh 456006
                    </p>

                    <h2>avantika.samagati@avantika.edu.in</h2>
                    <p>9588043164, 8805388985, 6265987173</p>
                </div>
            </div>
            <FloatingBtn />
        </div>
    );
};

export default Contact;
