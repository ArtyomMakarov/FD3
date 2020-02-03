import React from 'react';
import PropTypes from 'prop-types';

import {voteEvents} from './events';
import './MobileForm.css';

class MobileForm extends React.PureComponent {
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
    };

    state = {
        info: this.props.info,
    };

    newLastNameRef = null;
    newNameRef =null;
    newMiddleNameRef= null;
    newBalanceRef = null;

    setNewLastNameRef = (ref) => {
        this.newLastNameRef=ref;
    };

    setNewNameRef = (ref) => {
        this.newNameRef=ref;
    };

    setNewMiddleNameRef = (ref) => {
        this.newMiddleNameRef=ref;
    };

    setNewBalanceRef = (ref) => {
        this.newBalanceRef=ref;
    };

    setNewClient = () => {
        if ( this.newLastNameRef && this.newNameRef && this.newMiddleNameRef && this.newBalanceRef) {
            let newLastName=this.newLastNameRef.value;
            let newName=this.newNameRef.value;
            let newMiddleName=this.newMiddleNameRef.value;
            let newBalance=+(this.newBalanceRef.value);
            let newClient = {...this.state.info,fio:{
                  last_name: newLastName,
                  name:newName,
                  middle_name: newMiddleName}, balance: newBalance, status: newBalance<=0?'blocked':'active'};
            voteEvents.emit('EChangeClients', newClient);
        }
    };

    cancelClicked = () => {
        voteEvents.emit('ECancel')
    };

    render() {

        return (
            <div className='clientChange' hidden={this.props.mode==0}>

                <h3>{this.props.mode==2?"Add new client":"Edit Existing Client"}</h3>
                <span>ID: {this.props.info.id}</span>

                <label className='inputArea'>
                    <span className="fieldName">Фамилия</span>
                    <input type="text" name="lastName" ref={this.setNewLastNameRef} defaultValue={this.state.info.fio.last_name}/>
                </label>

                <label className='inputArea'>
                    <span className="fieldName">Имя</span>
                    <input type="text" name="name" ref={this.setNewNameRef} defaultValue={this.state.info.fio.name}/>
                </label>

                <label className='inputArea'>
                    <span className="fieldName">Отчество</span>
                    <input type="text" name="middle_name" ref={this.setNewMiddleNameRef} defaultValue={this.state.info.fio.middle_name}/>
                </label>

                <label className='inputArea'>
                    <span className="fieldName">Баланс</span>
                    <input type="text" name="balance" ref={this.setNewBalanceRef} defaultValue={this.state.info.balance}/>
                </label>

                <input type="button" value={this.props.mode==2?"Add":"Save"} disabled={this.state.error} onClick={this.setNewClient}/>
                <input type="button" value="Cancel" onClick={this.cancelClicked}/>

            </div>
        )
    }
}

export default MobileForm;