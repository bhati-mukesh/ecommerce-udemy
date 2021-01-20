import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import CartDropDown from '../cart-dropdown/CartDropDown';
import CartIcon from '../cart-icon/CartIcon';
import './Header.scss'



const Header = ({ currentUser,hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ? 
                <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CartIcon />
        </div>{
            hidden ? 
            null
            :
            <CartDropDown /> 
        }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
})


export default connect(mapStateToProps)(Header);