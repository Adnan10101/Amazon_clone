import { RadioButtonCheckedTwoTone } from "@material-ui/icons"
import React from "react"
import "./Checkout.css"
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"


function Checkout(){
    const[{basket},dispatch] = useStateValue()
    

    return(
        <div className="checkout">
            <div className="checkout_left">
                <img
                        className="checkout_ad"
                        src="http://shutitdowndc.org/wp-content/uploads/2020/01/amazon-credit-card-benefits.png"
                        alt=""
                />
                {basket?.length === 0 ? (
                    <div> 
                        <h2> Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or moe items, click
                            "Add to basket" next to the item.
                        </p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout_title"> Items in your basket</h2>

                            {/**list all checkout products */}
                            {basket.map(item =>
                                <CheckoutProduct 
                                    id={item.id} 
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />

                                )}
                        </div>
                    )}
                </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        
        </div>
            
    )
}

export default Checkout