import axios from 'axios';

const strapiUrl = process.env.STRAPI_URL;

export async function signIn({ email, password }) {
    const res = await axios.post(`${strapiUrl}/api/auth/local`, {
        identifier: email,
        password,
    });
    return res.data;
}

export async function signUp({
    username,
    email,
    password,
    contact,
    confirmPassword,
}) {

    const res = await axios.post(
        `http://localhost:1337/api/auth/local/register`,
        {
            email,
            password,
            username,
            contact,
        }
    );

    return res.data;
}
