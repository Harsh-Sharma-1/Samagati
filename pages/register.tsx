import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Input from '../components/UI/Input';
import NueButton from '../components/UI/NueButton';
import SocialMediaBtn from '../components/UI/SocialMediaBtn';

import { AiFillGoogleCircle } from 'react-icons/Ai';
import { BsFacebook } from 'react-icons/Bs';

import styles from '../styles/Register.module.css';
import { useState } from 'react';
import { signUp } from '../services/auth';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
    const router = useRouter();
    const [values, setValues] = useState({
        email: '',
        password: '',
        contact: '',
        username: '',
        confirmPassword: '',
    });

    const onSubmit = async () => {
        try {
            const data = await signUp({
                ...values,
            });
            console.log(data);
        } catch (e) {
            console.log(e);
            return;
        }

        router.push('/login');
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h1>Hello, Welcome To Samagati</h1>
                    <h3>Create your new profle</h3>
                    <Input
                        placeholder='Username'
                        onChange={(value: any) =>
                            setValues({ ...values, username: value })
                        }
                        type='text'
                    />
                    <Input
                        placeholder='Email'
                        type='email'
                        onChange={(value: any) =>
                            setValues({ ...values, email: value })
                        }
                    />
                    <Input
                        placeholder='Contact'
                        onChange={(value: any) =>
                            setValues({ ...values, contact: value })
                        }
                        type='tel'
                    />
                    <Input
                        placeholder='Password'
                        onChange={(value: any) =>
                            setValues({ ...values, password: value })
                        }
                        type='password'
                    />
                    <Input
                        placeholder='Confirm Password'
                        onChange={(value: any) =>
                            setValues({ ...values, confirmPassword: value })
                        }
                        type='password'
                    />
                    <NueButton name='Create' onClick={onSubmit} />

                    <h5 style={{ marginLeft: '4rem', color: '#173b82' }}>Or</h5>
                    <div className={styles.iconContainer}>
                        <SocialMediaBtn icon={AiFillGoogleCircle} />
                        <SocialMediaBtn icon={BsFacebook} />
                    </div>
                    <div className={styles.accountSpan}>
                        <span>Already a member?</span>
                        <span>
                            <Link href='./login'>
                                <a> Sign in</a>
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

export default Register;
