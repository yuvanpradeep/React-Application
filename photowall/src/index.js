import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//const lists = ['India', 'England', 'Australia'];
//const olElement = React.createElement('ol', null, lists.map((lis, index) => React.createElement('li', {key: index}, lis)));
//const olElement = <div><h1>List of Countries</h1><ol>{lists.map((list, index) => <li key={index}> {list}</li>)} </ol></div>
//ReactDOM.render(olElement, document.getElementById('root'));

class ListElements extends Component {
    render () {
        return ( <ol>
                     {this.props.lists.map((list, index) => <li key={index}> {list}</li>)} 
                 </ol> 
        )
    }
}

class Title extends Component {
    render() {
        return(<h1>List of Countries</h1>)
    }
}

class Main extends Component {
    render() {
        return(<div><Title/>
                    <ListElements lists = {['Abcd', 'QWerty']}/>
                    <ListElements lists ={['New zealand', 'South Africa']}/>
                    </div>)
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));