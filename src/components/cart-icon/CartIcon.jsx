import React from 'react';
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { TOGGLE_CART_HIDDEN } from '../../redux/constants';
import { toggleCartHidden } from '../../redux/cart/cartAction';


const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);