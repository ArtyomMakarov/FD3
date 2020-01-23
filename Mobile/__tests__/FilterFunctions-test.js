"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа кнопки Все MobileCompany', ()=>{
    const component = renderer.create(
        <MobileCompany />
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='All');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Активные MobileCompany', ()=>{
    const component = renderer.create(
        <MobileCompany />
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
    const component = renderer.create(
        <MobileCompany />
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
    const component = renderer.create(
        <MobileCompany />
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='AddClient');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});