import React from 'react';
import ReactDOM from 'react-dom';



const lists = ['India', 'England', 'Australia'];

const olElement = React.createElement('ol', null, lists.map((lis, index) => React.createElement('li', {key: index}, lis)));

ReactDOM.render(olElement, document.getElementById('root'));

