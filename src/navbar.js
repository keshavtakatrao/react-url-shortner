import React from 'react';
import {useHistory} from 'react-router-dom';


const Navbar = () => {
  let history = useHistory();
    
    function Logout(){
        window.localStorage.removeItem('curr_user');
        history.push('/home')
    };
    return (
        <div>
            <nav class="navbar navbar-light bg-warning" style={{ marginBottom: '100px' }}>
                <span class="navbar-brand mb-0 h1">URL Shortner</span>
                {window.localStorage.getItem('curr_user') && <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        {window.localStorage.getItem('curr_user')}
                        <button type='submit' className='btn btn-primary' onClick={Logout} >Log Out</button>
                    </li>
                </ul>}
            </nav>
        </div>
    )
}

export default Navbar
