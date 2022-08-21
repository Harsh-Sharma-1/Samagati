import React from 'react';
import Input from '../../../UI/Input';
import NueButton from './btn';
import styles from './styles.module.scss';

const FormContainer = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Book your spot on our next Voyage!</h1>
                <form action=''>
                    <Input placeholder='Enter your email' type='email' />
                    <Input placeholder='Enter your email' type='email' />
                    <Input placeholder='Enter your email' type='email' />
                    <Input placeholder='Enter your email' type='email' />
                    <Input placeholder='Enter your email' type='email' />
                    <Input placeholder='Enter your email' type='email' />
                    <NueButton />
                </form>
            </div>
        </div>
    );
};

export default FormContainer;
