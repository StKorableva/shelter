import React from 'react';
import classnames from 'classnames';

import './menuItem.scss';


export default function MenuItem(props) {
    const { number, img, text } = props.item;
    const { position } = props;

    const renderText = (text) => {
        return text.split('').map((letter, index) => (
            <div className='menuItem__letter' key={index}>
                <div className='menuItem__letter_inner'>
                {letter}
                </div>
            </div>
            )
        )
    }

    return (
        <div className='container'>
            <div className ={classnames('menuItem', position)}>
                <div className='menuItem__number'>
                    {number}
                </div>
                <img className='menuItem__img' src={img} alt={text}/>
                <span className='menuItem__text'>
                    {renderText(text)}
                </span>
            </div>
        </div>
    );
}
