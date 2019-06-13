import React from 'react';
function Photo(props) {
    const post = props.post;
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description}></img>
        <figcaption className="caption"><p>{post.description}</p></figcaption>
        <div className="button-container">
             <button className="remove-btn">Remove</button>
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

export default Photo;