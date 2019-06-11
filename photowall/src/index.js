import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const lists = ['India', 'England', 'Australia'];
//const olElement = React.createElement('ol', null, lists.map((lis, index) => React.createElement('li', {key: index}, lis)));
const olElement = <div><h1>List of Countries</h1><ol>{lists.map((list, index) => <li key={index}> {list}</li>)} </ol></div>
ReactDOM.render(olElement, document.getElementById('root'));

