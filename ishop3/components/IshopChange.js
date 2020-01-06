import React from 'react';
import PropTypes from 'prop-types';

import './IshopChange.css'

class IshopChange extends React.Component {

    static displayName =  "IshopChange"

    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        edit: PropTypes.bool.isRequired,
        code: PropTypes.string.isRequired,
        cbChanged: PropTypes.func.isRequired
    }

    state = {
        name: '',
        price: '',
        url: '',
        quantity: '',
        editItems: '',
        addItems: '',
        nameError: true,
        priceError: true,
        urlError: true,
        quantityError: true
    }

    inputChanged = (e) => {
        this.props.cbOnChange();
        if(e.target.value=='') {
            this.validFunc(e, true);
        } else {
            this.validFunc(e, false);
        }
    }

    validFunc = (e, error) => {
        switch (e.target.name) {
            case 'itemName':
                this.setState({name: e.target.value, nameError: error}, this.editItems);
                break;
            case 'itemPrice':
                this.setState({price: e.target.value, priceError: error},this.editItems);
                break;
            case 'itemURL':
                this.setState({url: e.target.value, urlError: error},this.editItems);
                break;
            case 'itemQuantity':
                this.setState({quantity: e.target.value, quantityError: error},this.editItems);
                break;
        }
    }

    editItems = () => {
        if (this.state.name && this.state.price && this.state.url && this.state.quantity) {
            var arr = this.props.items.slice();
                arr.map(v => {
                if (v.code == this.props.code) {
                    v.name = this.state.name;
                    v.price = this.state.price;
                    v.url = this.state.url;
                    v.inStock = this.state.quantity;
                }
                return v;

            });
            this.setState({editItems: arr});
        }
    }

    changeItems = (e) => {
        if (e.target.value=='Save') {
            this.props.cbChanged(this.state.editItems);
        } else {
            var arr = this.props.items.slice();
            arr.push({name: this.state.name, price: this.state.price, url: this.state.url, code: this.state.name, inStock: this.state.quantity });
            this.props.cbChanged(arr);
        }
        this.setState({name: '', price: '', url: '', quantity: ''});
    }

    render() {
        return (
            <div className='itemChange' key={this.props.key} hidden={!this.props.edit}>
                {
                    (this.props.mode==1)? <h3>Edit Existing Product</h3>: <h3>Add new product</h3>
                }
                <span>ID: {this.props.code}</span>
                <label className='inputArea'>
                    <span className="fieldName">Name</span>
                    <input type="text" name="itemName" onChange={this.inputChanged}/>
                    <span className='error' hidden={!this.state.nameError}>Please, fill the field. Value must be a string.</span>
                </label>
                <label className='inputArea'>
                    <span className="fieldName">Price</span>
                    <input type="text" name="itemPrice" onChange={this.inputChanged}/>
                    <span className='error' hidden={!this.state.priceError}>Please, fill the field. Value must be a rational number greater than 0.</span>
                </label>
                <label className='inputArea'>
                    <span className="fieldName">URL</span>
                    <input type="text" name="itemURL" onChange={this.inputChanged}/>
                    <span className='error' hidden={!this.state.urlError}>Please, fill the field. Value must be a valid URL.</span>
                </label>
                <label className='inputArea'>
                    <span className="fieldName">Quantity</span>
                    <input type="text" name="itemQuantity" onChange={this.inputChanged}/>
                    <span className='error' hidden={!this.state.quantityError}>Please, fill the field. Value must be a positive integer.</span>
                </label>
                <input type="button" value={(this.props.mode==1)?"Save":"Add"} onClick={this.changeItems}
                       disabled={!(this.state.name && this.state.price && this.state.url && this.state.quantity)}/>
                <input type="button" value="Cancel" onClick={this.props.cbCanceled}/>
            </div>
        )
    }
}

export default IshopChange;
