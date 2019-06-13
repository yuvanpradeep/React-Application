import React from 'react';
import PropTypes from 'prop-types';
function Photo(props) {
    const post = props.post;
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description}></img>
        <figcaption className="caption"><p>{post.description}</p></figcaption>
        <div className="button-container">
             <button className="remove-btn" onClick={()=> {props.onRemovePhoto(post)}}>Remove</button>
        </div>
    </figure>;
}


// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         return <figure className="figure">
//             <img className="photo" src={post.imageLink} alt={post.description}></img>
//             <figcaption className="caption"><p>{post.description}</p></figcaption>
//             <div className="button-container">
//                  <button className="remove-btn">Remove</button>
//             </div>
//         </figure>;
//     }
// }

Photo.PropTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;