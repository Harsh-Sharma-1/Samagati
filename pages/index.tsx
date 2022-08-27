import type { NextPage } from 'next';
import Corousal from '../components/page/home/corousal';
import Globe from '../components/page/home/globe';
import InfoContainer from '../components/page/home/infoContainer';

const Home: NextPage = () => {
    return (
        <>
            <Corousal />
            <InfoContainer />
            <Globe />
        </>
    );
};

export default Home;
