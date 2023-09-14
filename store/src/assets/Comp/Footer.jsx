import React from 'react'
import durbar1 from './img/logo.png'
function Footer() {
  return (
    <footer>
      <section className='bg-danger border-bottom py-2'>
        <div className="container bg-danger">
          <div className="row">
            <div className="col-lg-3"><img className='w-100' src={durbar1} alt="" /></div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6">
              <div className='text-white font-bold '>Subscribe to our newsletter for regular updates about Offers, Coupons & more</div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="your email here" aria-label="Search" />
                <button className="btn btn-outline-success bg-primary text-white px-4" type="submit">Subscribe</button>
              </form>

            </div>
            <div className="col-lg-6 text-end">
              <ul className='list-unstyled'>
                <h3 className='text-white'>About us</h3>
                <li className='text-white'>Services</li>
                <li className='text-white '>Services</li>
                <li className='text-white'  >Services</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-end">
              <h3 className='text-white'>Contact us</h3>
              <ul className='list-unstyled'>
                <li>contact:</li>
                <li>093474</li>
                <li>email:</li>
                <li>gurungvaskar137@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-4 text-end">
              <h3 className='text-white '>Contact us</h3>
              <ul className='list-unstyled '>
                <li>contact:</li>
                <li>093474</li>
                <li>email:</li>
                <li>gurungvaskar137@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-4 text-end">
              <h3 className='text-white'>SELLER ZONE</h3>
              <ul className='list-unstyled '>
                <li>Become A Seller </li>
                <li>Login to Seller Panel</li>
               
              </ul>
            </div>  
          </div>
          
        </div>
      </section>
      <section className='bg-secondary py-5'>

      </section>
    </footer>
  )
}

export default Footer