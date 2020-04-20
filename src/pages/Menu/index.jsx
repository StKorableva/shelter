import React, {useState} from 'react';
import { useDrag } from 'react-use-gesture';

import './menu.scss'
import MenuItem from "../../components/menuItem";

export default function Menu() {
    const [item, setItem] = useState(1);

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        document.documentElement.style.setProperty("--angle", (down ? mx : 0) + 'deg');
        console.log('mx:', Math.abs(Math.trunc(mx/300)), down)
        if (mx<-300 && !down) {
            nextSlide(Math.abs(Math.trunc(mx/300)));
        }
        if (mx>300 && !down) {
            previousSlide(Math.abs(Math.trunc(mx/300)));
        }
    });

    function nextSlide(slideOffset=1) {
        setItem(item+slideOffset);
        let degreeValue = -item*90+90 + 'deg';
        document.documentElement.style.setProperty("--degree", degreeValue);
    }

    function previousSlide(slideOffset=1) {
        setItem(item+slideOffset);
        let degreeValue = item*90+90 + 'deg';
        document.documentElement.style.setProperty("--degree", degreeValue);
    }

    return (
        <div className ='menu' {...bind()}>
            <div className='menu__circle'/>
            <div className='circle-container'>
                <MenuItem item={1}/>
                <MenuItem item={2}/>
                <MenuItem item={1}/>
                <MenuItem item={3}/>
            </div>

        </div>
);
}
