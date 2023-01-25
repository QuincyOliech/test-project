import React from "react";

function Cart (){
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src="http://placehold.it/" alt="placeholder" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Cart</h5>
                    <p className="card-text">Cart Content</p>
                    <button className="btn btn-success">Add to Cart</button>
                </div>


            </div>

        </div>
    )
}

export default Cart;