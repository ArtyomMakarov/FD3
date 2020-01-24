"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа кнопки Все MobileCompany', ()=>{
    let companyName='Velcom';
    let clientsArr=[
        {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"},
        {id:105, fio:{last_name: "Сидоров", name: "Сергей", middle_name: "Сергеевич"}, balance:250, status: "active"},
        {id:110, fio:{last_name: "Петров", name: "Пётр", middle_name: "Петрович"}, balance:180, status: "active"},
        {id:120, fio:{last_name: "Григорьев", name: "Григорий", middle_name: "Григорьевич"}, balance:-220, status: "blocked"},
    ];
    const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr}/>
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='All');
    console.log(buttonElem);
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Активные MobileCompany', ()=>{
    let companyName='Velcom';
    let clientsArr=[
        {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"},
        {id:105, fio:{last_name: "Сидоров", name: "Сергей", middle_name: "Сергеевич"}, balance:250, status: "active"},
        {id:110, fio:{last_name: "Петров", name: "Пётр", middle_name: "Петрович"}, balance:180, status: "active"},
        {id:120, fio:{last_name: "Григорьев", name: "Григорий", middle_name: "Григорьевич"}, balance:-220, status: "blocked"},
    ];
    const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr}/>
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='Active');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});


test('работа кнопки Заблокированные MobileCompany', ()=>{
    let companyName='Velcom';
    let clientsArr=[
        {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"},
        {id:105, fio:{last_name: "Сидоров", name: "Сергей", middle_name: "Сергеевич"}, balance:250, status: "active"},
        {id:110, fio:{last_name: "Петров", name: "Пётр", middle_name: "Петрович"}, balance:180, status: "active"},
        {id:120, fio:{last_name: "Григорьев", name: "Григорий", middle_name: "Григорьевич"}, balance:-220, status: "blocked"},
    ];
    const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr}/>
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='Blocked');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Добавь Клиента MobileCompany', ()=>{
    let companyName='Velcom';
    let clientsArr=[
        {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"},
        {id:105, fio:{last_name: "Сидоров", name: "Сергей", middle_name: "Сергеевич"}, balance:250, status: "active"},
        {id:110, fio:{last_name: "Петров", name: "Пётр", middle_name: "Петрович"}, balance:180, status: "active"},
        {id:120, fio:{last_name: "Григорьев", name: "Григорий", middle_name: "Григорьевич"}, balance:-220, status: "blocked"},
    ];
    const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr}/>
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='AddClient');
    console.log(buttonElem);
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});