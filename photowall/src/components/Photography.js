import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function Photography(props) {
    return <div className="photo-grid">{props.posts.map((post, index) => <Photo key = {index} post = {post} onRemovePhoto={props.onRemovePhoto}/>)}</div>;
}

// class Photography extends Component {
//     render () {
//         return <div className="photo-grid">{this.props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}</div>;
//     }
// }

Photography.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photography;