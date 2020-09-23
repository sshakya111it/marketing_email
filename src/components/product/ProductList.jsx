import React from 'react'

const ProductList = () => {
    return (
        <div className="product-list section">

            <div className="card z-depth-0 product-summary">
                <div className="card-content grey-text text-darken-3">
                 <span className="card-title">Rent</span>  
                 <p>Apartment</p> 
                 <p className="grey-text">7/4 Caroline Street, Westmead 2145 </p>
                </div>
            </div>
            <div className="card z-depth-0 product-summary">
                <div className="card-content grey-text text-darken-3">
                 <span className="card-title">Buy</span>  
                 <p> Apartment</p> 
                 <p className="grey-text">1304/91b Bridge Road, Westmead, NSW 2145 </p>
                </div>
            </div>
            <div className="card z-depth-0 product-summary">
                <div className="card-content grey-text text-darken-3">
                 <span className="card-title">Lease</span>  
                 <p> House</p> 
                 <p className="grey-text">68 Good Street, Westmead, NSW 2145 </p>
                </div>
            </div>
        </div>

    )

}
export default ProductList;