import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const handleCartClick = () => {
        console.log('Cart Clicked!!');
    }
    return (
        <div>

            <div className='header'>
                <h2 className='Amazon_icon'>Amazon</h2>
                <div className='search_icons'>
                    <input type="text" />
                    <FontAwesomeIcon className="magnifyingIcon" icon={faMagnifyingGlass} />
                </div>
                <div className="right">
                    <p>Accounts</p>
                    <p>Orders</p>
                    <FontAwesomeIcon
                        onClick={handleCartClick}
                        className="icon"
                        icon={faCartShopping}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;