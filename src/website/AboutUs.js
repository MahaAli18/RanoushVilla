import React, { Component } from 'react';
import WebHeader from './includes/header';
import WebFooter from './includes/footer';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
              <WebHeader/>
                <div id="fh5co-about" data-section="about">
                        <div className="fh5co-2col fh5co-bg to-animate-2" style={{backgroundImage: 'url(images/rv7.jpg)'}}></div>
                        <div className="fh5co-2col fh5co-text">
                            <h2 className="heading to-animate">About Us</h2>
                            <p className="to-animate"><span className="firstcharacter">F</span>ar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                            <p className="text-center to-animate"><a href="#" className="btn btn-primary btn-outline">Get in touch</a></p>
                        </div>
                   </div>
              <WebFooter/>
            </React.Fragment>
        )
    }
}


export default AboutUs;