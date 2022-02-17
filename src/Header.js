import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider"
import { auth } from "./firebase";



/** nav bar sticking on top of the page is header */
function Header(){
    const [{basket}] = useStateValue()
    const[{user}] = useStateValue()
    console.log("user",user)

    const login=() =>{
        if(user){
            auth.signOut()
        }
    }
    

    return(
        <nav className="header">
            {/**logo on left --> img */}
            <Link to="/">
                 <img 
                    className="header_logo"  
                    src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" 
                    alt=""
                />
            </Link>


            {/**search box */}
            <div className="header_search">
                <input 
                    className="header_searchInput"
                    type="text" 
                    placeholder="something"
                />
                <SearchIcon className="header_searchIcon"/>
            </div>


            {/**3 links */}
            <div className="header_nav">
                {/**1st link */}
                <Link to={!user &&"/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello,{user?.email}</span>
                        <span className="header_optionLineTwo" >{user ?"sign out" : "sign in"}</span>
                    </div>
                </Link>


                {/**2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo" >& Orders</span>
                    </div>
                </Link>

                {/**3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/**basket icon with number */ }
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/*shopping basket icon*/}
                        <ShoppingBasketIcon />
                        {/**number of items in a basket */}
                        <span className="header_optionLineTwo header_basketCount">
                            {basket?.length}
                            </span>
                    

                    </div>

                </Link>

            </div>


            

        </nav>
    )
}

export default Header


