import React from 'react';
import PropTypes from 'prop-types';

import './Rainbow.css';

class Rainbow extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    render () {
        let arr = [];
        for (let i=0;i<=this.props.colors.length-1;i++) {
            let elemBegin = <div key={i} style={{border:"solid 3px "+this.props.colors[i],padding:"5px"}}>
                                {this.props.children}
                            </div>;
            arr.push(elemBegin);
        }
        return (
            <div>
                {arr}
            </div>
        )
    }
}

export default Rainbow;