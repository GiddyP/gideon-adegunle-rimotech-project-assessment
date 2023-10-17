'use client';
import CompLayout from '@src/components/CompLayout';
import { AutoTyping } from '@src/components/reusable/AutoTyping';
import React, { useEffect } from 'react';

const page = () => {
    useEffect(() => {
        const careerText = ['...'];
        const careerTyping = new AutoTyping('#loading', careerText, {
            typeSpeed: 50,
            deleteSpeed: 100,
            waitBeforeDelete: 1000,
            waitBetweenWords: 250,
        });

        careerTyping.start();
    }, []);

    return (
        <></>
        // <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        //     <CompLayout className='flex items-center justify-center text-center w-[150px]'>
        //         <h3 className="text-2xl relative">
        //             loading
        //             <span id='loading' className='absolute'></span>
        //         </h3>
        //     </CompLayout>
        // </main>
    );
};

export default page;