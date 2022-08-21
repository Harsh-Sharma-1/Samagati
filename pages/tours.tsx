import React from 'react';
import Corousal from '../components/page/tours/corousal';
import Info from '../components/page/tours/info';
import SearchBox from '../components/page/tours/searchbox';
import UpcommingTours from '../components/page/tours/upcomingTours';

const Tours = () => {
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
            <SearchBox />
            <Corousal />
            <UpcommingTours />
        </div>
    );
};

export default Tours;
