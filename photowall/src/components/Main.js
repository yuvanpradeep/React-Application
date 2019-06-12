import React, {Component} from 'react';
import List from './List';
import TitleX from './Title';

class Main extends Component {
    render() {
        return(<div><TitleX title = {'To-do tasks'}/>
                    <List lists = {['Abcd', 'QWerty']}/>
                    <List lists ={['New zealand', 'South Africa']}/>
                    </div>)
    }
}

export default Main;