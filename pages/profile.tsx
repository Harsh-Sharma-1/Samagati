import { getSession } from 'next-auth/react';
import React from 'react';

const Profile = () => {
    return <div>Profile</div>;
};

export const getServerSideProps = async (context: any) => {
    const session = await getSession(context);
    // Check if session exists or not, if not, redirect
    if (session == null) {
        return {
            redirect: {
                destination: '/auth/not-authenticated',
                permanent: true,
            },
        };
    }
    return {
        props: {},
    };
};

export default Profile;
