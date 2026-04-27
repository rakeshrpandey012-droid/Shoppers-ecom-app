import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product&&product.image} alt="" />
                <img src={product&&product.image} alt="" />
                <img src={product&&product.image} alt="" />
                <img src={product&&product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product&&product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product&&product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product&&product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product&&product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                The Ad_idas Sporty Men Round Neck 3-Stripes Tee is built for men who value style, comfort, and high performance in their everyday activewear. Showcasing Ad_idas's signature 3-Stripes design, this lightweight sports t-shirt combines modern athletic aesthetics with moisture-wicking technology to keep you cool, dry, and comfortable during workouts, gym sessions, and outdoor training. Its breathable fabric enhances airflow, while the durable construction ensures long-lasting performance without losing shape or color. Perfect for sports and lifestyle needs, this versatile round neck tee is an all-season essential that seamlessly blends athletic function with everyday casual fashion.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product&&product._id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest </p>
        </div>
    </div>
  )
}

export default ProductDisplay