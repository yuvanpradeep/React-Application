import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function Photography(props) {
    return   <div> 
            <Link className="add-icon" to='/AddPhoto'></Link>
            {/* <button className="add-icon" onClick={props.onNavigate}>+</button> */}
             <div className="photo-grid">{props.posts.map((post, index) => 
             <Photo key = {index} post = {post} onRemovePhoto={props.onRemovePhoto}/>)}
             </div></div>
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