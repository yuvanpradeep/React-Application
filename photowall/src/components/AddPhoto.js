import React, {Component} from 'react';
// checking for the commit


// Checking the stash setting
class AddPhoto extends Component {
    render() {
        return (<div>
                 <h1>Photo Wall</h1>
                 <div>
                 <form>
                    <input type="text" placeholder='Link'></input>
                    <input type="text" placeholder='Description'></input>
                    <button>Post</button>
                 </form>
                </div>
               </div>)
    }
}

export default AddPhoto;