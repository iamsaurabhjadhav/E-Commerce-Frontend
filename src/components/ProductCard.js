import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1new.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import watchz from "../images/Watchz.jpg"
const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation();
  console.log(location);

  return (
    <>
      <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/1" : ":id"}`} className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <img src={wish} alt='wishlist' />
            </button>
          </div>
          <div className='product-image'>
            <img src={wish} className='img-fluid' alt='product image' />
            <img src={watch2} style={{ width: "100%", height: "100%" }} alt='product image' />


          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
              Human beings are complex and wonderful creatures! Check out the following adjectives to describe them in all their glory. I divided these Spanish describing words into the categories of personality, appearance, and emotional states.</p>
            <p className='price'>$100.00</p>

          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src={prodcompare} alt='compare' />
              </Link>
              <Link>
                <img src={view} alt='view' />
              </Link>
              <Link>
                <img src={addcart} alt='addcart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/1" : ":id"}`} className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <img src={wish} alt='wishlist' />
            </button>
          </div>
          <div className='product-image'>
            <img src={wish} className='img-fluid' alt='product image' />
            <img src={watch2} style={{ width: "100%", height: "100%" }} alt='product image' />


          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
              Human beings are complex and wonderful creatures! Check out the following adjectives to describe them in all their glory. I divided these Spanish describing words into the categories of personality, appearance, and emotional states.</p>
            <p className='price'>$100.00</p>

          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src={prodcompare} alt='compare' />
              </Link>
              <Link>
                <img src={view} alt='view' />
              </Link>
              <Link>
                <img src={addcart} alt='addcart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>

  )
}

export default ProductCard
