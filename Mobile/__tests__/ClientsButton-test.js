"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';


test('работа кнопки Редактировать MobileClient', ()=>{
    let mode = 1;
    let client = {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"};

    const component = renderer.create(
        <MobileClient mode={mode} info={client}/>
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.props.className =='inputEdit');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Удалить MobileClient', ()=>{
    let mode = 1;
    let client = {id:101, fio:{last_name: "Иванов", name: "Иван", middle_name: "Иванович"}, balance:200, status: "active"};
    const component = renderer.create(
        <MobileClient mode={mode} info={client}/>
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.props.className=='inputDelete');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

