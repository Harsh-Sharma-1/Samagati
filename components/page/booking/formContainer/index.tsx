import React from 'react';
import Input from './inputBox';
import NueButton from './btn';
import styles from './styles.module.scss';
import { useState } from 'react';
import TextArea from './textArea';

const FormContainer = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        contact: '',
        redeem: '',
        learnings: '',
    });

    const handleChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <div className={styles.container}>
            <div>
                <h1>Book your spot on our next Voyage!</h1>
                <form action=''>
                    <Input
                        placeholder='Enter your name'
                        type='text'
                        onChange={(value: string) => {
                            handleChange('name', value);
                        }}
                    />

                    <Input
                        placeholder='Enter your email'
                        type='email'
                        onChange={(value: string) => {
                            handleChange('email', value);
                        }}
                    />

                    <Input
                        placeholder='Enter your contact'
                        type='text'
                        onChange={(value: string) => {
                            handleChange('contact', value);
                        }}
                    />

                    <TextArea
                        placeholder='Enter your expected learning from this tour'
                        onChange={(value: string) => {
                            handleChange('learnings', value);
                        }}
                    />

                    <Input
                        placeholder='Redeem your creadits'
                        type='text'
                        onChange={(value: string) => {
                            handleChange('redeem', value);
                        }}
                    />

                    <NueButton />
                </form>
            </div>
        </div>
    );
};

export default FormContainer;
