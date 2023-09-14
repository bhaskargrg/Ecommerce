import React from 'react'
import './style.css'
import ProductsData from '../../Data/ProductsData'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function HomeProduct(props) {
    let ab=ProductsData.filter((a)=>a.category==props.tt)
    return (
        <div className='border-top py-3 border-bottom'>
            <div className="container py-5">
                <h2 className='py-2 text-uppercase fw-bold'>{props.tt}</h2>
                <OwlCarousel className='owl-theme' loop margin={10} nav items={4}>
                    {ab.slice(0,4).map((a)=>(
                        <div className="">
                        <div className="product-grid2">
                            <div className="product-image2">
                                <Link to={`/detail/${a.id}`}>
                                    <img className="pic-1" src={a.thumbnail} />
                                    <img className="pic-2" src={a.thumbnail} />
                                </Link>
                                <ul className="social">
                                    <li><a href="#" data-tip="Quick View"><i className="fa fa-eye" /></a></li>
                                    <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                    <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                </ul>
                                <a className="add-to-cart" href>Add to cart</a>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">{a.title}</a></h3>
                                <span className="price">$599.99</span>
                            </div>
                        </div>
                    </div>
                    ))}
                    

                </OwlCarousel>
            </div>
        </div>
    )
}

export default HomeProduct