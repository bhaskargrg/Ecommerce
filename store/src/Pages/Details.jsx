import React from 'react'
import { useParams } from 'react-router-dom'
import ProductsData from '../Data/ProductsData';
import './index.css'

function Details() {
    let { id } = useParams();
    let yy = ProductsData.find((a) => a.id == id);

    return (
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={yy.thumbnail} /></div>
                                <div className="tab-pane" id="pic-2"><img src={yy.thumbnail} /></div>
                                <div className="tab-pane" id="pic-3"><img src={yy.thumbnail} /></div>
                                <div className="tab-pane" id="pic-4"><img src={yy.thumbnail} /></div>
                                <div className="tab-pane" id="pic-5"><img src={yy.thumbnail} /></div>
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={yy.thumbnail} /></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img src={yy.thumbnail}/></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img src={yy.thumbnail} /></a></li>
                                <li><a data-target="#pic-4" data-toggle="tab"><img src={yy.thumbnail} /></a></li>
                                <li><a data-target="#pic-5" data-toggle="tab"><img src={yy.thumbnail} /></a></li>
                            </ul>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{yy.title}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                </div>
                                <span className="review-no">{yy.brand} ,{yy.rating} reviews</span>
                            </div>
                            <p className="product-description">{yy.description}</p>
                            <h4 className="price">current price: <span>{yy.price}</span></h4>
                            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <h5 className="sizes">sizes:
                                <span className="size" data-toggle="tooltip" title="small">s</span>
                                <span className="size" data-toggle="tooltip" title="medium">m</span>
                                <span className="size" data-toggle="tooltip" title="large">l</span>
                                <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                            </h5>
                            <h5 className="colors">colors:
                                <span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
                                <span className="color green" />
                                <span className="color blue" />
                            </h5>
                            <div className="action">
                                <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details