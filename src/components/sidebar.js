import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai'; 
import * as FaIcons from 'react-icons/fa'; 

function Sidebar() {
    const [menu, setMenu] = useState(false)

    const showMenu = () => setMenu(!menu);
    return (  
        <div>
            <nav>
                <Link to="#">
                    <FaIcons.FaBars onClick={showMenu} />
                </Link>
            </nav>
            <nav className={menu ? 'sidebar active' : 'sidebar'}>
                <h1>9oudidfj</h1>
            </nav>
        </div>
    );
}

export default Sidebar;