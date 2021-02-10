import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';


class ItemPage extends Component {



    render(){

        const {choosed} = this.props;

        const item = this.props.menuItems.filter(item => item.id === choosed);
        
        const {title, url, category, price} = item;

        return(
            <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
            </>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        choosed: state.choosed
    }
}


export default WithRestoService()(connect(mapStateToProps)(ItemPage));