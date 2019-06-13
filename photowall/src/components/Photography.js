import React from 'react';
import Photo from './Photo';

function Photography(props) {
    return <div className="photo-grid">{props.posts.map((post, index) => <Photo key = {index} post = {post} onRemovePhoto={props.onRemovePhoto}/>)}</div>;
}

// class Photography extends Component {
//     render () {
//         return <div className="photo-grid">{this.props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}</div>;
//     }
// }

export default Photography;