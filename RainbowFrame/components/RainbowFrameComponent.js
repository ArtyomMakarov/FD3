import React from 'react';
import PropTypes from 'prop-types';

import './Rainbow.css';

class Rainbow extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    render () {
        let z=this.props.children;
        this.props.colors.forEach( color => {
            z = <div style={{border:"solid 3px "+color,padding:"5px"}}>{z}</div>
        } );
        return (
            z
        )
    }
}

export default Rainbow;