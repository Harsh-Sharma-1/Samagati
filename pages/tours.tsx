import axios from 'axios';
import React from 'react';
import Info from '../components/page/tours/info';
import PreviousTours from '../components/page/tours/previousTours';
import UpcommingTours from '../components/page/tours/upcomingTours';

type props = {
    products: any;
};

const Tours: React.FC<props> = ({ products }) => {
    return (
        <div>
            <Info
                title={'What are Samagati Voyages?'}
                text={
                    'We believe that redesigning the structure of\
             learning through travel is the need of the hour and\
              we are here to disrupt the taboo of taking GAP Days\
              /Week/Month and Year in India. '
                }
            />
            <Info
                title={'Our previous voyages'}
                text={
                    'In our past voyages we experienced the city of\
                     Maheshwar in Madhya Pradesh to understand the story\
                      of a woman, Ahilya Bai Holkar - one of the top admini\
                      strators and rulers India has ever produced'
                }
            />
            <PreviousTours />
            <UpcommingTours data={products.data} />
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
    };
    const res = await axios.get(
        'http://localhost:1337/api/tours?populate=*',
        config
    );
    const products = res.data;
    return {
        props: {
            products,
        },
    };
}

export default Tours;
