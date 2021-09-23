import React from "react";
// import css from "./index.css"
// import react from "react";

class CartItem extends React.Component{
    render()
    {
        return (
            <div className="cart-item">
                <div className="left-block">
                  <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 45} }>Phone</div>
                    <div style={ {color : '#777'} }>Rs :999</div>
                    <div style={ {color : '#777'} }>Qty : 1</div>
                    <div className="cart-item-actions">
                        {/*button*/}
                    </div>
                </div>
            </div>
        );
    }
}

// for styling in my cartitem file i have to do it using by creating 
// object in js 
// in js we use camelcase just in borderRadius instead of border-radius
const styles = {
    image : {
        height : 150, 
        width : 150,
        borerRadius : 4,
        background : '#ccc',
        margin:20,
        padding:20
    }
}

// const styleForWholeCart = {
//     cartItem1 : {
//         display: inlineFlex
//     }
// }

export default CartItem;