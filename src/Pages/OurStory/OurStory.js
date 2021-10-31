import React from 'react';
import traveler from '../../images/traveler.jpg';

const OurStory = () => {
    return ( 
            <div className="container-fluid ">
            <div className="row mt-lg mt-5">
            <div className="col-lg-6">
                <h6><span>DISCOVER STORY</span></h6>
                <h2 className="text-left">Our Story</h2>
                <p>Agency’s major role is to perform as a representative. Promoting travel goods and services on behalf of a dealer. Therefore, similar to other retail industries, they don’t have a stock in stores. A holiday pack or a ticket is not obtained from a dealer till a consumer desires that purchase. </p>
                <p>The holiday or ticket is providing to them at money off offer. The revenue is consequently the variation among the marketing cost which the consumer pays and the discounted cost at which it is offered to the agent. This is known as the commission.</p>
            </div>
            <div className="col-lg-6">
               <img src={traveler} alt="traveler" className="img-fluid" /> 
            </div> 
            </div>
            </div>
    );
};

export default OurStory;