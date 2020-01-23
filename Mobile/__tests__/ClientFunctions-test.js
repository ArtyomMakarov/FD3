"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';

test('работа кнопки Редактировать MobileClient', ()=>{
    const component = renderer.create(
        <MobileClient />
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='inputEdit');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Удалить MobileClient', ()=>{
    const component = renderer.create(
        <MobileClient />
    );
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    const buttonElem = component.root.find( el => el.className=='inputDelete');
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    buttonElem.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});