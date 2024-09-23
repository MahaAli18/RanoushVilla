import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            
        }
    }
    /// Read data///
    componentDidMount() {
        axios.get('http://localhost:8080/ReactProject/App/banana-app/CRUD/api/categories_api/read_post.php')
            .then(res => {  
                this.setState({
                    categories: res.data
                })
                console.log(this.state.categories);
            })
    }

    render(){
        const { categories } = this.state;
        return(
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
                                               <img src={'http://localhost:8080/ReactProject/App/banana-app/public/images/' + product.image} className="card-img-top" alt="-" />
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
);
    }
}

export default Test;