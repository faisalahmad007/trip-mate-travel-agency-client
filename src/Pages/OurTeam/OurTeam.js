import React from 'react';

import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <div>
            <div className="container-fluid">
             <div className="row">
                 <div className="text-center"><h2>Meet Our Team</h2></div>
                <div className="col-lg-4">
                    
                    <img src={team1} alt={team1} className="img-fluid"/>
                    <h2>John Abraham</h2>
                 <div className="icons-main">
                    <div className="text-center">
                  <a href="www.facebook.com" className="icons-area"><i class="fab fa-facebook-f"></i></a>
                    
                    <a href="www.instagram.com" className="icons-area"><i class="fab fa-instagram"></i></a>
                    <a href="www.twitter.com" className="icons-area"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                </div>
                <div div className="col-lg-4">
                <img src={team2} alt={team2} className="img-fluid"/>
                <h2>Cristine Stuart</h2>
             <div className="icons-main">
                <div className="text-center">
                <a href="www.facebook.com" className="icons-area"><i class="fab fa-facebook-f"></i></a>
                    
                    <a href="www.instagram.com" className="icons-area"><i class="fab fa-instagram"></i></a>
                    <a href="www.twitter.com" className="icons-area"><i class="fab fa-twitter"></i></a>
                </div>
                </div>
                </div>
                <div div className="col-lg-4">
                <img src={team3} alt={team3} className="img-fluid"/>
                <h2>Sarah Roberts</h2>
            <div className="icons-main">
               <div className="text-center">
               <a href="www.facebook.com" className="icons-area"><i class="fab fa-facebook-f"></i></a>
                    
                    <a href="www.instagram.com" className="icons-area"><i class="fab fa-instagram"></i></a>
                    <a href="www.twitter.com" className="icons-area"><i class="fab fa-twitter"></i></a>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;