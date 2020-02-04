"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[
    {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"},
    {id:105, fio:{last_name: "Сидоров", name: "Сергей", middle_name: "Сергеевич"}, balance:250, status: "active"},
    {id:110, fio:{last_name: "Петров", name: "Пётр", middle_name: "Петрович"}, balance:180, status: "active"},
    {id:120, fio:{last_name: "Григорьев", name: "Григорий", middle_name: "Григорьевич"}, balance:-220, status: "blocked"},
];

ReactDOM.render(
    <MobileCompany
        name={companyName}
        clients={clientsArr}
    />
    , document.getElementById('container')
);