import React from 'react';
import classnames from 'classnames';

import './menuItem.scss';

import menuItemConfig from "./menuItem.config";

export default function MenuItem(props) {
    const { item } = props;
    const config = menuItemConfig[item];
    const { number, img, text } = config;


    function renderText(text) {
        return text.split('').map((letter, index) => {
                return ( <div className='menuItem__letter' key={index}>
                    <div className='menuItem__letter_inner'>
                    {letter}
                    </div>
                </div>)
            }
        )
    }

    return (
        <div className='container'>
            <div className ='menuItem'>
                <div className='menuItem__number'>{number}</div>
                <img className={classnames({'menuItem__img': true, 'menuItem__img_3': (item===3)})} src={img} alt='menu icon'/>
                <span className='menuItem__text'>{renderText(text)}</span>
            </div>
        </div>
    );
}
