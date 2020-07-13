import React, {useState} from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    function useForceUpdate(){
        const [index, setIndex] = useState(1); // integer state
        return () => setIndex(index===1?2:1); // update the state to force render
    }
    const forceUpdate = useForceUpdate();

    return (
        <ul className="navigation">
            <li className={window.location.pathname==="/portfolio/"?"currentPage":undefined}><NavLink to = "/portfolio/" onClick={forceUpdate}>Projects</NavLink></li>
            <li className={window.location.pathname==="/portfolio/About"?"currentPage":undefined}><NavLink to = "/portfolio/About" onClick={forceUpdate}>About</NavLink></li>
        </ul>

    )
}

export default Navbar
