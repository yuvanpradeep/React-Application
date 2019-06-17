import React, {Component} from 'react';

class AddPhoto extends Component {


    render() {
        return <div>
                 <h1>Add photos here</h1>
                 <label>Photo URL</label><input type="text"></input>
                 <label>Description</label><input type="text"></input>
               </div>
    }
}

export default AddPhoto;