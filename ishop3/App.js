"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IshopBlock from './components/IshopBlock';
import itemsArr from './items.json';

var shopName = '21 Vek';

ReactDOM.render(
    <IshopBlock name={shopName} items={itemsArr}/>,
    document.getElementById('container')
);