import React from 'react'
import durbar from '../Comp/img/durbar.webp'
import { Routes,Route, Link } from 'react-router-dom'
import Home from '../../Pages/Home'
import Category from '../../Pages/Category'
import Details from '../../Pages/Details'


function Header() {
    return (<>
        <header className='border-bottom'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-2">
                        <Link to='/'>
                        <img className='w-100' src={durbar} alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-6 offset-lg-1  ">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success  " type="submit">Search</button>
                        </form>

                    </div>
                    <div className="col-lg-2 text-end">
                        <button type="button" className="btn  position-relative ">
                        <i class="bi bi-cart3"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>

                        <button type="button" className="btn  position-relative ">
                        <i class="bi bi-heart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>

                        <button type="button" className="btn  position-relative ">
                        <i class="bi bi-gear-fill"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        

                    </div>

                </div>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:cid' element={<Category/>}/>
            <Route path='/detail/:id' element={<Details/>}/>
        </Routes>
        </>
    )
}

export default Header