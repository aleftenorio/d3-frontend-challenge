import React from 'react'
import { FaStarAndCrescent } from 'react-icons/fa';

const ThemeSwitcher = ({toggleTheme}) => (

    <div className="button" onClick={toggleTheme}>
        <FaStarAndCrescent className="icon" /> <span> Dark Mode</span>
    </div>

);

export default ThemeSwitcher