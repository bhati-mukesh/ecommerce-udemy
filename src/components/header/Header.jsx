import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import CartDropDown from '../cart-dropdown/CartDropDown';
import CartIcon from '../cart-icon/CartIcon';
// import './Header.scss'
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './HeaderStyle';



const Header = ({ currentUser,hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/" >
                <Logo className="logo" />
            </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink to="/signin" >SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>{
            hidden ? 
            null
            :
            <CartDropDown /> 
        }
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
})


export default connect(mapStateToProps)(Header);