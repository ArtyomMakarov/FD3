import React from 'react';
import PropTypes from 'prop-types';

import './IshopBlock.css';

import IshopItem from './IshopItem'
import IshopInfo from './IshopInfo'
import IshopChange from './IshopChange'



class IshopBlock extends React.Component {

    static displayName = "IshopBlock"

    static propTypes = {
        name: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired

    };

    static defaultProps () {
        return {name: "не задано"}
    }

    state =  {
        selectedItemCode: null,
        items: this.props.items,
        name: '',
        price: '',
        url: '',
        quantity: 0,
        info: false,
        edit: false,
        mode: 1
    }

    itemSelected = (code, name, url, price) => {
        this.setState({selectedItemCode: code, name: name, price: price, url: url,
            info: (code==this.state.selectedItemCode)?true:false, edit: false})
    }

    itemEdited = (code, name, price, url, quantity) => {
        this.setState({selectedItemCode: code, name: name, price: price, url: url, quantity: quantity,
            edit: true, info: false})
    }

    setDeleteCode = (code) => {
        this.setState({selectedItemCode: code}, this.deleteElement)
    }

    deleteElement = () => {
        let answer = confirm('Delete?');
        if (answer) {
            var filterArr = this.state.items.filter(item =>
                item.code !== this.state.selectedItemCode
            );
            this.setState({items: filterArr});
        }
    }

    newProduct = () => {
        this.setState({mode: 2, edit: true})
    }
    
    render() {

        var itemsCode = this.state.items.map(v =>
            <IshopItem key={v.code} code={v.code}
                name={v.name} price={v.price} url={v.url} inStock={v.inStock}
                cbSelected={this.itemSelected} cbDeleted={this.setDeleteCode}
                cbEdited={this.itemEdited}  isSelected={v.code == this.state.selectedItemCode}
            />
        );

        return (
            <div className='Ishop'>
                <div className='ShopName'>{this.props.name}</div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='cell'>Name</th>
                            <th className='cell'>Price</th>
                            <th className='cell'>URL</th>
                            <th className='cell'>Quantity</th>
                            <th className='cell'>Control</th>
                        </tr>
                    </thead>
                    <tbody className='body'>{itemsCode}</tbody>
                </table>
                <input type='button' value='New Product' onClick={this.newProduct}/>
                <IshopInfo name={this.state.name} url={this.state.url} price={this.state.price} hidden={this.state.info==true&&this.state.edit==false}/>
                <IshopChange name={this.state.name} url={this.state.url} price={this.state.price} quantity={this.state.quantity}
                    edit={this.state.edit} mode={this.state.mode}
                />
            </div>
        );
    }
};

export default IshopBlock;