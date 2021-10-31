import React from 'react';
import Banner from '../Banner/Banner';
import OurStory from '../OurStory/OurStory';
import OurTeam from '../OurTeam/OurTeam';
import OurServices from '../OurServices/OurServices';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';


const Home = () => {
    const{user,isLoading} = useAuth();
    if(isLoading) {
        return <Spinner animation="border" variant="danger"/>
    }
    return (
        <div>
           <Banner></Banner>
           <OurServices></OurServices>
           <OurStory></OurStory>
           <OurTeam></OurTeam>
        </div>
    );
};

export default Home;