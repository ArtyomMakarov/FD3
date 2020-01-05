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
        selectedItemCode: '',
        items: this.props.items,
        name: '',
        price: '',
        url: '',
        quantity: '',
        info: false,
        edit: false,
        onChange: false,
        mode: 1
    }

    itemSelected = (code, name, price, url) => {
        this.setState({selectedItemCode: code, name: name, price: price, url: url,
            info: true, edit: false})
    }

    itemEdited = (code, name, price, url, quantity) => {
        this.setState({selectedItemCode: code, name: name, price: price, url: url, quantity: quantity,
            edit: true, info: false, mode: 1})
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
            this.setState({items: filterArr, info: false});
        }
    }

    onChange = () => {
        this.setState({onChange: true});
    }

    newProduct = () => {
        this.setState({mode: 2, edit: true})
    }

    changeItems = (editItems) => {
        this.setState({items: editItems});
    }

    canceled = () => {
        this.setState({edit: false});
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
                <input type='button' value='New Product' onClick={this.newProduct} hidden={this.state.edit==true}/>
                <IshopInfo name={this.state.name} url={this.state.url} price={this.state.price} hidden={this.state.info==true&&this.state.edit==false&&this.state.onChange==false}/>
                <IshopChange code={this.state.selectedItemCode} name={this.state.name} url={this.state.url} price={this.state.price} quantity={this.state.quantity}
                    edit={this.state.edit} mode={this.state.mode} items={this.state.items} cbChanged={this.changeItems} cbCanceled={this.canceled} cbOnChange={this.onChange}
                />
            </div>
        );
    }
};

export default IshopBlock;