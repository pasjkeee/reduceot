import React from 'react';
import './menu-list-item.scss';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {chooseItem} from '../../actions';

const MenuListItem = ({menuItem, key}) => {
    const {title, price, url, category, id} = menuItem;
    return (
        <>
            <li className="menu__item" onClick={()=>{chooseItem(id)}}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        choosed: state.choosed
    }
}

const mapDispatchToProps = {
    chooseItem
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuListItem));