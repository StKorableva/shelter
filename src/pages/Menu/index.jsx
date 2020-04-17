import React from 'react';

import './menu.scss'

export default function Menu() {

    return (
        <div className ='menu'>
            <div className='menu__circle'/>
            <div className='menu__number1'>01</div>
            <div className='menu__number2'>02</div>
            <div className='menu__number3'>03</div>
            <span>Cats</span>
            <span>Dogs</span>
            <span>About</span>
        </div>
);
}
