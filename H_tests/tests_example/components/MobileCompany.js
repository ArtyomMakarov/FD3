import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import MobileForm from './MobileForm';

import './MobileCompany.css';
import {voteEvents} from './events';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fio: PropTypes.shape({
                    last_name:PropTypes.string.isRequired,
                    name:PropTypes.string.isRequired,
                    middle_name:PropTypes.string.isRequired
                }),
                balance: PropTypes.number.isRequired,
                status: PropTypes.string.isRequired
            })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        id: 0,
        mode: 0,
        key: 0,
    };

    componentDidMount = () => {
        voteEvents.addListener('EEditClient',this.clientEdited);
        voteEvents.addListener('EDeleteClient',this.clientDeleted);
        voteEvents.addListener('ECancel', this.canceled);
        voteEvents.addListener('EChangeClients', this.editClient);
    };

    componentWillUnmount = () => {
        voteEvents.removeListener('EEditClient',this.clientEdited);
        voteEvents.removeListener('EDeleteClient',this.clientDeleted);
        voteEvents.removeListener('ECancel', this.canceled);
        voteEvents.removeListener('EChangeClients', this.editClient);
    };

    clientEdited = (id) => {
        this.setState({id: id, mode: 1, key: ++this.state.key});
    };

    clientDeleted = (id) => {
        let answer = confirm('Delete?');
        if (answer) {
            let newClients=[...this.state.clients];
            var filterArr = newClients.filter(client =>
                client.id !== id
            );
            this.setState({clients: filterArr, mode: 0});
        }
    };

    editClient = (newClient) => {
        let newClients = [...this.state.clients];
        if (this.state.mode==1) {
            newClients=this.state.clients.map((client)=>
                client.id==this.state.id?newClient:client
            );
        } else {
            newClients.push(newClient);
        }
        this.setState({clients: newClients, mode: 0});
    };

    canceled = () => {
        this.setState({mode: 0, blockChange: false});
    };

    addClient = () => {
        this.setState({mode: 2, key: ++this.state.key});
    };

    setName1 = () => {
        this.setState({name:'МТС'});
    };

    setName2 = () => {
        this.setState({name:'Velcom'});
    };

    filterAll = () => {
        this.setState({clients: this.props.clients});
    };

    filterActive = () => {
      let copyClients = [...this.props.clients];
      let activeClients = copyClients.filter((client)=>
          client.status=='active'
      );
      this.setState({clients: activeClients});
    };

    filterBlocked = () => {
        let copyClients = [...this.props.clients];
        let blockedClients = copyClients.filter((client)=>
            client.status=='blocked'
        );
        this.setState({clients: blockedClients});
    };

    render() {

        console.log("MobileCompany render");

        var clientsCode=this.state.clients.map( client =>
            <MobileClient key={client.id} info={client} mode={this.state.mode}/>
        );

        let client = this.state.clients.find(v => v.id == this.state.id);
        let newClient = {
            id: this.state.key,
            fio: {
                last_name: '',
                name: '',
                middle_name: ''},
            balance: 0,
            status: ''
        };

        return (
            <div className='MobileCompany'>
                <input type="button" value="МТС" onClick={this.setName1} />
                <input type="button" value="Velcom" onClick={this.setName2} />
                <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
                <div className="MobileCompanyFilter">
                    <input type="button" className="All" value="Все" onClick={this.filterAll}/>
                    <input type="button" className="Active" value="Активные" onClick={this.filterActive}/>
                    <input type="button" className="Blocked" value="Заблокированные" onClick={this.filterBlocked}/>
                </div>
                <table className='table'>
                    <thead>
                    <tr className='header'>
                        <th className='cell'>Фамилия</th>
                        <th className='cell'>Имя</th>
                        <th className='cell'>Отчество</th>
                        <th className='cell'>Баланс</th>
                        <th className='cell'>Статус</th>
                        <th className='cell'>Редактировать</th>
                        <th className='cell'>Удалить</th>
                    </tr>
                    </thead>
                    <tbody className='body'>{clientsCode}</tbody>
                </table>
                <input type="button" className="AddClient" value="Добавь клиента" onClick={this.addClient} hidden={this.state.mode>0}/>
                {
                    (this.state.mode>0) &&
                    <MobileForm key={this.state.key} info={this.state.mode==1?client:newClient} mode={this.state.mode}/>
                }
            </div>
        )
    }
}

export default MobileCompany;