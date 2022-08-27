import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Input from '../components/UI/Input';
import NueButton from '../components/UI/NueButton';
import SocialMediaBtn from '../components/UI/SocialMediaBtn';
import styles from '../styles/Login.module.css';

import { AiFillGoogleCircle } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Login: NextPage = () => {
    const router = useRouter();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            ...values,
        });
        if (result?.ok) {
            router.replace('/');
            return;
        }
        alert('Credential is not valid');
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h1>Welcome To Samagati</h1>
                    <h3>Login to your Samagati account</h3>

                    <Input
                        placeholder='Username'
                        onChange={(value: any) => {
                            setValues({ ...values, email: value });
                        }}
                        type='text'
                    />
                    <Input
                        placeholder='Password'
                        onChange={(value: any) => {
                            setValues({ ...values, password: value });
                        }}
                        type='password'
                    />
                    <div className={styles.logPassword}>
                        <NueButton name='Login' onClick={onSubmit} />
                        <h3>Forgot password?</h3>
                    </div>
                    <h5 style={{ marginLeft: '4rem', color: '#173b82' }}>Or</h5>
                    <div className={styles.iconContainer}>
                        <SocialMediaBtn icon={AiFillGoogleCircle} />
                        <SocialMediaBtn icon={BsFacebook} />
                    </div>
                    <div className={styles.accountSpan}>
                        <span>Dont have an account?</span>
                        <span>
                            <Link href='/register'>
                                <a> Create account</a>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className='right-content'>
                    <Image
                        src='/assets/Saly.png'
                        alt='Picture of the author'
                        width={550}
                        height={720}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
