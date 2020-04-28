import React from 'react';
import '../components/Second.css';
import {Link} from 'react-router-dom';

function Second(){
    return(
        <div className="Nav">
           <div><Link to='/'>Home</Link></div>
           <div><Link to='/AddBlog'>Add Thought</Link></div>
           <div><Link to='/UpdateBlog'>Update Thought</Link></div>
        </div>
    )
}

export default Second;