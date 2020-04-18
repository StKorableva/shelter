import React from 'react';

import './menu.scss'
import MenuItem from "../../components/menuItem";

export default function Menu() {

    return (
        <div className ='menu'>
            <div className='menu__circle'/>
            <MenuItem item={1}/>
            <MenuItem item={2}/>
            <MenuItem item={3}/>
        </div>
);
}
