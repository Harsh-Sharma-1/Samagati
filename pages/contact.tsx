import React, { useState } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/Layout/Navbar';
import styles from '../styles/Contact.module.css';
import TextAreaBox from '../components/UI/TextAreaBox';

const Contact: NextPage = () => {
    const [question, setQuestion] = useState<string>('');
    console.log(question);
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Start talking!</h1>
                    <h3>Ask your questions</h3>
                    <TextAreaBox
                        placeholder='Enter question here...'
                        onChange={setQuestion}
                    />
                </div>
                <div className={styles.right}>
                    <h1>Hello</h1>
                </div>
            </div>
        </>
    );
};

export default Contact;
