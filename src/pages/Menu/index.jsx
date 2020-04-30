import React, {useEffect, useState} from 'react';
import { useDrag } from 'react-use-gesture';

import './menu.scss'
import MenuItem from "../../components/menuItem";
import MenuConfig from '../../menuConfig';

export default function Menu() {
    console.log('MENU')
    const [item, setItem] = useState(0);

    const CHANGE_SLIDE_ANGLE = 60;

    let center = [
        window.innerWidth / 2,
        window.innerHeight
    ];

    document.addEventListener('resize', () => {
        center = [
            window.innerWidth / 2,
            window.innerHeight
        ];
    })

    const getAngle = (point, vec) => {
        return Math.atan2(vec[0] - point[0], - (vec[1] - point[1]) ) * (180 / Math.PI);
    }

    const bind = useDrag(({ down, initial, xy }) => {
        const angle = getAngle(center, xy) - getAngle(center, initial);

        document.documentElement.style.setProperty("--angle", (down ? angle : 0) + 'deg');
        if (angle < -CHANGE_SLIDE_ANGLE && !down) {
            nextSlide({}, Math.abs(Math.trunc(angle / CHANGE_SLIDE_ANGLE)));
        }
        if (angle > CHANGE_SLIDE_ANGLE && !down) {
            previousSlide({}, Math.abs(Math.trunc(angle / CHANGE_SLIDE_ANGLE)));
        }
    });

    const nextSlide = (e, slideOffset = 1) => {
        setItem(item + slideOffset);
    }

    const previousSlide = (e, slideOffset = 1) => {
        setItem(item - slideOffset);
    }

    const getPosition = (slide) => {
        return (
            slide.id - 1  === item % 4 ? 'active' :
            slide.id - 2  === item % 4 ? 'next' :
            slide.id      === item % 4 ? 'previous' : ''
        );
    }

    useEffect(() => {
        document.documentElement.style.setProperty("--degree",`${item*-90}deg`);
    }, [item]);

    return (
        <div className ='menu' {...bind()}>
            <div className='menu__circle'/>
            <div className='circle-container'>

                {MenuConfig.map((slide) => (
                    <MenuItem 
                        item={slide} 
                        key={slide.id} 
                        position={getPosition(slide)}
                    />
                ))}

            </div>
        </div>
    );
}
