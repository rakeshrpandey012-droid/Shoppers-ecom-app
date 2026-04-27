import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website, simply put, is an online store. It's a platform where goods and services are traded between buyers and sellers over the internet. Unlike a physical storefront, an e-commerce website can be accessed at any time, from anywhere, as long as there's an internet connection. As a digital shopfront displays products or services, allows users to select and purchase them and facilitates the acceptance of payments.</p>
            <p>An e-commerce website, short for electronic commerce website, is an online platform dedicated to the sale of products, whether goods or services.
            It is a digital extension of traditional commerce, allowing businesses and individuals to showcase, promote, and market their products or services on the internet.
            For example, the retailer La Fnac, which initially had a chain of physical stores, has developed its e-commerce website over several years to keep up with changing purchasing behaviors and sell its products online (today, this site is also a marketplace, to learn more about the differences between an e-commerce website and a marketplace, check out our dedicated article).
            The e-commerce website thus offers consumers the opportunity to browse a virtual catalog of products or services, add items to their shopping cart, and complete their purchases by making secure electronic transactions.</p>
        </div>
    </div>
  )
}

export default DescriptionBox