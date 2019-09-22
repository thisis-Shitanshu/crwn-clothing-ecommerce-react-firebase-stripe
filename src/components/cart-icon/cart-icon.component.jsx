import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toogleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);