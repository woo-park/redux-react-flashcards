import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

  return (
      <nav>
        <ul className="" >

          <li ><Link to="/"><span className=''>Home</span></Link></li>


          <li><Link to="/counting"><span className=''>Counting</span></Link></li>

        </ul>
      </nav>
  );
}

export default Nav;
