import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import OddSideMenu from './oddsidemenu';
import EvenSideMenu from './evensidemenu';

function Sidebar({ all, completed, incomplete, deleted, handledelete, handleComplete, handleRestore }) {
    const [fullInput] = useState([{
        title: 'All',
        icon: <IoIcons.IoIosPaper />,
        iconOpened: <RiIcons.RiArrowDownSFill />, 
        iconClosed: <RiIcons.RiArrowUpSFill />,
    }])
    
    const [fullComplete] = useState([{
        title: 'Completed',
        text: 'Undo',
        icon: <AiIcons.AiOutlineCheckCircle />,
        iconOpened: <RiIcons.RiArrowDownSFill />, 
        iconClosed: <RiIcons.RiArrowUpSFill /> 
    }])
    
    const [fullIncomplete] = useState([{
        title: 'Unfinished',
        icon: <BiIcons.BiTaskX />,
        iconOpened: <RiIcons.RiArrowDownSFill />, 
        iconClosed: <RiIcons.RiArrowUpSFill /> 
    }])
    
    const [fullDelete] = useState([{
        title: 'Deleted',
        text: 'Restore',
        icon: <FiIcons.FiTrash />,
        iconOpened: <RiIcons.RiArrowDownSFill />, 
        iconClosed: <RiIcons.RiArrowUpSFill /> 
    }])
    
    const [menu, setMenu] = useState(false)

    const showMenu = () => setMenu(!menu);
    return (  
        <div>
            <nav className="menu-bars">
                <Link to="#">
                    <FaIcons.FaBars onClick={showMenu} />
                </Link>
            </nav>
            <section className={menu ? 'sidebar active' : 'sidebar'}>
                <nav className="menu-bars">
                    <Link to="#">
                        <AiIcons.AiOutlineClose onClick={showMenu} />
                    </Link>
                </nav>
                {fullInput.map((item, index) => {
                    return <OddSideMenu input={all} item={item} key={index} completeTask={handleComplete} deleteTask={handledelete} />
                })}
                {fullComplete.map((item, index) => {
                    return <EvenSideMenu input={completed} item={item} key={index} restoreTask={handleRestore} />
                })}
                {fullIncomplete.map((item, index) => {
                    return <OddSideMenu input={incomplete} item={item} key={index} completeTask={handleComplete} deleteTask={handledelete} />
                })}
                {fullDelete.map((item, index) => {
                    return <EvenSideMenu input={deleted} item={item} key={index} restoreTask={handleRestore} />
                })}
            </section>
        </div>
    );
}

export default Sidebar;