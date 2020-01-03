import React from 'react';
import PropTypes from 'prop-types';

class IshopChange extends React.Component {

    static displayName =  "IshopChange"

    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        edit: PropTypes.bool.isRequired
    }


    render() {
        return (
            <div className='itemChange' hidden={!this.props.edit}>
                {
                    (this.props.mode==1)? <h3>Edit Existing Product</h3>: <h3>Add new product</h3>
                }
                <span>ID: {}</span>
                <span>Name</span><input type="text" name="itemName"/>
                <span>Price</span><input type="text" name="itemPrice"/>
                <span>URL</span><input type="text" name="itemURL"/>
                <span>Quantity</span><input type="text" name="itemQuantity"/>
                <input type="button" value={(this.props.mode==1)?"Save":"Add"}/>
                <input type="button" value="Cancel"/>
            </div>
        )
    }
}

export default IshopChange;
