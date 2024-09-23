import React, { Component } from 'react'

class WebFooter extends Component {
    render() {
        return (
         <div id="fh5co-footer">
		   <div className="container">
                <div className="row row-padded">
                    <div className="col-md-12 text-center">
                       
                        <p className="text-center to-animate"><a href="#" className="js-gotop">Go To Top</a></p>
                   </div>
			    </div>
			    <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="fh5co-social">
                            <li className="to-animate-2"><a href="#"><i className="icon-facebook"></i></a></li>
                            <li className="to-animate-2"><a href="#"><i className="icon-twitter"></i></a></li>
                            <li className="to-animate-2"><a href="#"><i className="icon-instagram"></i></a></li>
                        </ul>
                    </div>
			       </div>
		    </div>
	    </div>
        )
    }
}

export default WebFooter;
