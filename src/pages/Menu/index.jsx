import React, {useEffect, useState} from 'react';
import { useDrag } from 'react-use-gesture';

import './menu.scss'
import MenuItem from "../../components/menuItem";

export default function Menu() {
    const [item, setItem] = useState(0);

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        mx/=6;
        document.documentElement.style.setProperty("--angle", (down ? mx : 0) + 'deg');
        if (mx<-90 && !down) {
            nextSlide({}, Math.abs(Math.trunc(mx/90)));
        }
        if (mx>90 && !down) {
            previousSlide({}, Math.abs(Math.trunc(mx/90)));
        }
    });

    function nextSlide(e, slideOffset=1) {
        setItem(item+slideOffset);
    }

    function previousSlide(e, slideOffset=1) {
        setItem(item-slideOffset);
    }

    useEffect(() => {
        document.documentElement.style.setProperty("--degree",`${item*-90}deg`);
    }, [item]);

    return (
        <div className ='menu' {...bind()}>
            <div className='menu__circle'/>
            <div className='circle-container'>
                <MenuItem item={1}/>
                <MenuItem item={2}/>
                <MenuItem item={3}/>
                <MenuItem item={4}/>
            </div>

        </div>
);
}
