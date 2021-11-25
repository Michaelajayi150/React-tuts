import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

function OddSideMenu({item, input, completeTask, deleteTask}) {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
        <Link to='#' className="sub-menu" onClick={input.length > 0 && showSubnav}>
            <div>
                <span className="dropdown-icon">{item.icon}</span>
                <span className="drop-list">{item.title}</span>
            </div>
            <div>
                {input.length > 0 && subnav ? item.iconClosed : input.length > 0 ? item.iconOpened : null}
            </div>
        </Link>
        <div className="drop-down">
            {subnav && input.map((input, index) => {
                    return (
                        <Link className={input.cName} to="#" key={index}>
                            <span className="menu-value">{input.value}</span>
                            <button className="btn btn-complete" onClick={() => completeTask(input)}><AiIcons.AiOutlineCheckCircle /></button>
                            <button className="btn btn-delete" onClick={() => deleteTask(input)}><AiIcons.AiOutlineDelete /></button>
                        </Link>
                    )
                })}
        </div>
        </>
    );
}

export default OddSideMenu;