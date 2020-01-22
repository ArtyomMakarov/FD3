import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {voteEvents} from './events';

class MobileClient extends React.PureComponent {

    static propTypes = {
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.shape({
                last_name:PropTypes.string.isRequired,
                name:PropTypes.string.isRequired,
                middle_name:PropTypes.string.isRequired
            }),
            balance: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired
        }),
        mode: PropTypes.number.isRequired
    };

    state = {
        info: this.props.info
    };

    componentWillReceiveProps = (newProps) => {
        this.setState({info:newProps.info});
    };

    deleteClient = () => {
        voteEvents.emit("EDeleteClient",this.props.info.id);
    };

    editClient = () => {
        voteEvents.emit("EEditClient",this.props.info.id);
    };

    render() {

        console.log("MobileClient id="+this.state.info.id+" render");

        return (
            <tr className='MobileClient'>
                <td className='cell'>{this.props.info.fio.last_name}</td>
                <td className='cell'>{this.props.info.fio.name}</td>
                <td className='cell'>{this.props.info.fio.middle_name}</td>
                <td className='cell'>{this.props.info.balance}</td>
                <td className='cell' style={{background: this.props.info.balance>0?"green":"red"}}>{this.props.info.status}</td>
                <td className='cell'>
                    <input type='button' className="input" value='Редактировать' onClick={this.editClient} disabled={this.props.mode==2}/>
                </td>
                <td className='cell'>
                    <input type='button' className="input" value='Удалить' onClick={this.deleteClient} disabled={this.props.mode>0}/>
                </td>
            </tr>
        );

    }

}

export default MobileClient;