import React, { Component } from 'react';
import WebHeader from './includes/header';
import WebFooter from './includes/footer';
import axios from 'axios';

class MainWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            
        }
    }
    /// Read data///
    componentDidMount() {
        axios.get('http://localhost:80/ReactProject/App/banana-app/CRUD/api/categories_api/read_post.php')
            .then(res => {  
                this.setState({
                    categories: res.data
                })
                console.log(this.state.categories);
            })
    }
    render() {
        const { categories } = this.state;
        return (
           <React.Fragment>   
            <div id="fh5co-container">
                <div id="demo" className="carousel slide " data-ride="carousel">
                    <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                           
                    </ul>  
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/rv1.jpeg" alt="Los Angeles" />
                                <div className="carousel-caption">
                                    <h3 className="to-animate fadeInUp animated">Ranoush Villa</h3>
                                    <p className="to-animate fadeInUp animated">Home of the best italian cusine</p>
                                </div>
                           </div>
                            <div className="carousel-item">
                                <img src="./images/rv2.jpeg" alt="Chicago" />
                                <div className="carousel-caption">
                                    <h3 className="to-animate fadeInUp animated">Ranoush Villa</h3>
                                    <p className="to-animate fadeInUp animated">Home of the best italian cusine</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/rv5.jpg" alt="New York" />
                                <div className="carousel-caption">
                                    <h3 className="to-animate fadeInUp animated">Ranoush Villa</h3>
                                    <p className="to-animate fadeInUp animated">Home of the best italian cusine</p>
                                </div>
                            </div>
                    </div>
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            </a>
                </div>

                        
                        <WebHeader/>
                        <div id="fh5co-sayings">
                            <div className="container">
                                <div className="row to-animate">
                                <div className="col-md-12">
                                    <div className="flexslider">
                                        <ul className="slides">
                                            
                                            <li>
                                                <blockquote>
                                                    <p>&ldquo;Cooking is an art, but all art requires knowing something about the techniques and materials&rdquo;</p>
                                                    <p className="quote-author">&mdash; Nathan Myhrvold</p>
                                                </blockquote>
                                            </li>
                                            <li>
                                                <blockquote>
                                                    <p>&ldquo;Give a man food, and he can eat htmlFor a day. Give a man a job, and he can only eat htmlFor 30 minutes on break.&rdquo;</p>
                                                    <p className="quote-author">&mdash; Lev L. Spiro</p>
                                                </blockquote>
                                            </li>
                                            <li>
                                                <blockquote>
                                                    <p>&ldquo;Find something you’re passionate about and keep tremendously interested in it.&rdquo;</p>
                                                    <p className="quote-author">&mdash; Julia Child</p>
                                                </blockquote>
                                            </li>
                                            <li>
                                                <blockquote>
                                                    <p>&ldquo;Never work before breakfast; if you have to work before breakfast, eat your breakfast first.&rdquo;</p>
                                                    <p className="quote-author">&mdash; Josh Billings</p>
                                                </blockquote>
                                            </li>    
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="fh5co-featured" data-section="features">
                        <div className="container">
                            <div className="row text-center fh5co-heading row-padded">
                                <div className="col-md-8 offset-md-2">
                                    <h2 className="heading to-animate to-animate fadeInUp animated">Featured Dishes</h2>
                                    <p className="sub-heading to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="row to-animate fadeInUp animated">
                                <div className="fh5co-grid">
                                    <div className="fh5co-v-half to-animate-2">
                                        <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(images/mangolian.jpg)'}}></div>
                                        <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                                            <h2>Fresh Mushrooms</h2>
                                            <span className="pricing">$7.50</span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                    <div className="fh5co-v-half">
                                        <div className="fh5co-h-row-2 to-animate-2">
                                            <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(images/sweet.jpg)'}}></div>
                                            <div className="fh5co-v-col-2 fh5co-text arrow-left">
                                                <h2>Grilled Chiken Salad</h2>
                                                <span className="pricing">$12.00</span>
                                                <p>Far far away, behind the word mountains.</p>
                                            </div>
                                        </div>
                                        <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                                            <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(images/pasta.jpg)'}}></div>
                                            <div className="fh5co-v-col-2 fh5co-text arrow-right">
                                                <h2>Cheese and Garlic Toast</h2>
                                                <span className="pricing">$4.50</span>
                                                <p>Far far away, behind the word mountains.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fh5co-v-half">
                                        <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                                            <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(images/res_img_7.jpg)'}}></div>
                                            <div className="fh5co-v-col-2 fh5co-text arrow-right">
                                                <h2>Organic Egg</h2>
                                                <span className="pricing">$4.99</span>
                                                <p>Far far away, behind the word mountains.</p>
                                            </div>
                                        </div>
                                        <div className="fh5co-h-row-2 to-animate-2">
                                            <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(images/res_img_6.jpg)'}}></div>
                                            <div className="fh5co-v-col-2 fh5co-text arrow-left">
                                                <h2>Salad with Crispy Chicken</h2>
                                                <span className="pricing">$8.50</span>
                                                <p>Far far away, behind the word mountains.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fh5co-v-half to-animate-2">
                                        <div className="fh5co-v-col-2 fh5co-bg-img" style={{backgroundImage: 'url(images/res_img_3.jpg)'}}></div>
                                        <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                                            <h2>Tomato Soup with Chicken</h2>
                                            <span className="pricing">$12.99</span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                     </div>
                     
                    <div id="fh5co-type" style={{backgroundImage: 'url(images/slide_1.jpg)'}} data-stellar-background-ratio="0.5">
                        <div className="fh5co-overlay"></div>
                        <div className="container">
                        <div className="row text-center fh5co-heading row-padded">
                                <div className="col-md-8 offset-md-2">
                                    <h2 className="heading to-animate to-animate fadeInUp animated cust">Our Customers</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 to-animate">
                                    <div className="fh5co-type">
                                        <h3 className="with-icon icon-1">Grace Smith</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 to-animate">
                                    <div className="fh5co-type">
                                        <h3 className="with-icon icon-2">Susan Williams</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 to-animate">
                                    <div className="fh5co-type">
                                        <h3 className="with-icon icon-3">John Doe</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className="col-md-3 to-animate">
                                    <div className="fh5co-type">
                                        <h3 className="with-icon icon-4">Laura klein</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div id="fh5co-menus" data-section="menu">
                <div className="container">
                    <div className="row text-center fh5co-heading row-padded">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="heading to-animate">Food Menu</h2>
                            <p className="sub-heading to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="row row-padded">
                   { categories && categories.length > 0 ? (
                       categories.map(category => { 
                       return( 
                           <div className="col-md-6">
                            <div className="fh5co-food-menu to-animate-2">
                                <h2 className="fh5co-drinks">{category.title}</h2>
                                 <ul>
                                 { category.products && category.products.length > 0 ? (
                                    category.products.map(product => { 
                                      return( 
                                        <li>
                                        <div className="fh5co-food-desc">
                                            <figure>
                                               <img src={'http://localhost:80/ReactProject/App/banana-app/public/images/' + product.image} className="card-img-top" alt="-" />
                                            </figure>
                                            <div>
                                                <h3>{product.title}</h3>
                                                <p>{product.body}</p>
                                            </div>
                                        </div>
                                        <div className="fh5co-food-pricing">
                                         {product.price}
                                        </div>
                                      </li> );
                                    })
                                    ):
                                    (`no items yet`)}
                                    </ul>
                                </div>
                              </div>
                            
                            );
                        })
                    ) : (
                            <div className="text-center col-md-12">
                                <h2>NO POSTS YET</h2>
                            </div>
                        )
                   }
                   </div>

                            <div className="row">
                                    <div className="col-md-4 offset-md-4 text-center to-animate-2">
                                        <p><a href="#" className="btn btn-primary btn-outline">More Food Menu</a></p>
                                    </div>
                             </div>
                        </div>
                    </div>
                                <div id="fh5co-events" data-section="events" style={{backgroundImage: 'url(images/slide_2.jpg)'}} data-stellar-background-ratio="0.5">
                                <div className="fh5co-overlay"></div>
                                <div className="container">
                                    <div className="row text-center fh5co-heading row-padded">
                                        <div className="col-md-8 offset-md-2 to-animate">
                                            <h2 className="heading">Upcoming Events</h2>
                                            <p className="sub-heading">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fh5co-event to-animate-2">
                                                <h3>Kitchen Workshops</h3>
                                                <span className="fh5co-event-meta">March 19th, 2016</span>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p><a href="#" className="btn btn-primary btn-outline">Read More</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="fh5co-event to-animate-2">
                                                <h3>Music Concerts</h3>
                                                <span className="fh5co-event-meta">March 19th, 2016</span>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p><a href="#" className="btn btn-primary btn-outline">Read More</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="fh5co-event to-animate-2">
                                                <h3>Free to Eat Party</h3>
                                                <span className="fh5co-event-meta">March 19th, 2016</span>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                <p><a href="#" className="btn btn-primary btn-outline">Read More</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="fh5co-contact" data-section="reservation">
                                <div className="container">
                                    <div className="row text-center fh5co-heading row-padded">
                                        <div className="col-md-8 offset-md-2">
                                            <h2 className="heading to-animate">Reserve a Table</h2>
                                            <p className="sub-heading to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 to-animate-2">
                                            <h3>Contact Info</h3>
                                            <ul className="fh5co-contact-info">
                                                <li className="fh5co-contact-address ">
                                                    <i className="icon-home"></i>
                                                    5555 Love Paradise 56 New Clity 5655, Excel Tower United Kingdom
                                                </li>
                                                <li><i className="icon-phone"></i> (123) 465-6789</li>
                                                <li><i className="icon-envelope"></i>info@freehtml5.co</li>
                                                <li><i className="icon-globe"></i> <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 to-animate-2">
                                            <h3>Reservation Form</h3>
                                            <div className="form-group ">
                                                <label htmlFor="name" className="sr-only">Name</label>
                                                <input id="name" className="form-control" placeholder="Name" type="text" name="name"/>
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="email" className="sr-only">Email</label>
                                                <input id="email" className="form-control" placeholder="Email" type="email" name="email"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="occation" className="sr-only">Occation</label>
                                                <select className="form-control" id="occation" name="occation">
                                                    <option>Select an Occation</option>
                                                <option>Wedding Ceremony</option>
                                                <option>Birthday</option>
                                                <option>Others</option>
                                                </select>
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="date" className="sr-only">Date</label>
                                                <input id="date" className="form-control" placeholder="Date &amp; Time" type="text" name="date"/>
                                            </div>
       
                                            <div className="form-group ">
                                                <label htmlFor="message" className="sr-only">Message</label>
                                                <textarea name="" id="message" cols="30" rows="5" className="form-control" placeholder="Message" name="message"></textarea>
                                            </div>
                                            <div className="form-group ">
                                                <input className="btn btn-primary" value="Send Message" type="submit" />
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 <WebFooter/>
            </React.Fragment>
        )
    }
}

export default MainWeb;
