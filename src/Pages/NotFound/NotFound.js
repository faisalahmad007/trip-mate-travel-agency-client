import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%'}} src={notfound} alt="Not Found"/>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;