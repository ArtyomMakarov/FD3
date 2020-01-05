import React from 'react';
import PropTypes from 'prop-types';

class IshopItem extends React.Component {

    static displayName =  "IshopItem"

    static propTypes = {
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        inStock: PropTypes.string.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbEdited: PropTypes.func.isRequired,
        cbDeleted:  PropTypes.func.isRequired,
        isSelected: PropTypes.bool.isRequired
    }

    itemClicked = () => {
        this.props.cbSelected(this.props.code, this.props.name, this.props.price, this.props.url);
    }

    deleteItem = () => {
        this.props.cbDeleted(this.props.code)
    }

    editItem = (e) => {
            e.stopPropagation();
            this.props.cbEdited(this.props.code, this.props.name, this.props.price, this.props.url, this.props.inStock)
    }

    render() {
        return (
            <tr key={this.props.code} className='item'
                onClick={this.itemClicked} style={{background: this.props.isSelected ? 'yellow' : 'white'}}>
                <td className='cell'>{this.props.name}</td>
                <td className='cell'>{this.props.price}</td>
                <td className='cell'>{this.props.url}</td>
                <td className='cell'>{this.props.inStock}</td>
                <td className='cell'>
                    <input type='button' value='Edit' onClick={this.editItem}/>
                    <input type='button' value='Delete' onClick={this.deleteItem}/>
                </td>
            </tr>
        );
    }
};

export default IshopItem;

