import React from 'react';
import PropTypes from 'prop-types';
import './ItemInfo.css'


class IshopInfo extends React.Component {

    static displayName = "IshopInfo"

    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
        hidden:PropTypes.bool.isRequired
    }

    render () {
        return (
            <div className='itemInfo' hidden={!this.props.hidden}>
                <h3>{this.props.name}</h3>
                <a href={this.props.url}>{this.props.url}</a>
                <span className='Price'>{this.props.price}</span>
            </div>
        )
    }
}

export default IshopInfo;