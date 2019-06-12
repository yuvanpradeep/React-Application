import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

import './css/stylesheet.css';
//const lists = ['India', 'England', 'Australia'];
//const olElement = React.createElement('ol', null, lists.map((lis, index) => React.createElement('li', {key: index}, lis)));
//const olElement = <div><h1>List of Countries</h1><ol>{lists.map((list, index) => <li key={index}> {list}</li>)} </ol></div>
//ReactDOM.render(olElement, document.getElementById('root'));

//const title ='To do list';

ReactDOM.render(<Main/>, document.getElementById('root'));