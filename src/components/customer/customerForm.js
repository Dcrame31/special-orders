import React from 'react';

const CustomerForm = () => {
   
        return (
            <div>  
                <h1>Cookbook Order Form</h1>
                <form className="ui form">
                    <div className="field">
                        <label>Customer Name </label>
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <input type="number"/>
                    </div>
                    <div className="field">
                        <label>Email Address</label>
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <label>Product</label>
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <label>Pickup Time</label>
                        <input type="number"/>
                    </div>
                    <div className="field">
                        <label>Credit Card Number</label>
                        <input type="number"/>
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type="text"/>
                    </div>
                    <div className="field">
                        <label>Order Taken By</label>
                        <input type="text"/>
                    </div>
                    <button type="submit" className="ui button">Submit</button>

                </form>
            </div>
        )
    
    
}

export default CustomerForm;