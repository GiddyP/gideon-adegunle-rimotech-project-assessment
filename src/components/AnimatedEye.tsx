'use client';
import React, { useEffect } from "react";
import style from '@styles/AnimatedEye.module.css'

const AnimatedEye = () => {

    const eyeball = (event: MouseEvent) => {
        const eyes = document.querySelectorAll('.AnimatedEye_eye__sA7ad');
        eyes.forEach((eye: any) => {
            let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

            let radian = Math.atan2(event.clientX - x, event.clientY - y);
            let rotate = radian * (180 / Math.PI) * -1 + 90;
            eye.style.transform = `rotate(${ rotate }deg)`;
        });
    };

    useEffect(() => {
        document.body.addEventListener('mousemove', eyeball);
        return () => {
            document.body.removeEventListener('mousemove', eyeball);
        };
    }, []);

    return (
        <div className="flex justify-center items-center -mb-9">
            <div className={style.eye} />
            <div className={style.eye} />
        </div>
    );
};

export default AnimatedEye;
