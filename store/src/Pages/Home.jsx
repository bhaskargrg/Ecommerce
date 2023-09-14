import React from 'react'
import CatData from '../Data/CatData'
import { Link } from 'react-router-dom'
import slider1 from '../assets/Comp/img/s1.png'
import slider2 from '../assets/Comp/img/s2.png'
import slider3 from '../assets/Comp/img/s3.png'
import HomeProduct from '../assets/Comp/HomeProduct'


function Home() {
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <ul class="list-group">
                        <li className="list-group-item active" aria-current="true">Categories</li>
                        {CatData.slice(0, 9).map((a) => (
                            <li className="list-group-item " key={a}><Link to={`/category/${a}`} className='link-dark text-decoration-none'>{a}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval={10000}>
                                <img src={slider1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <img src={slider2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <HomeProduct tt='smartphones'/>
        <HomeProduct tt='laptops'/>
        <HomeProduct tt='skincare'/>
        <HomeProduct tt='fragrances'/>
        </>
    )
}

export default Home