import React, {Component} from 'react';


class List extends Component {
    render () {
        return ( <ol>
                     {this.props.lists.map((list, index) => <li key={index}> {list}</li>)} 
                 </ol> 
        )
    }
}

export default List;