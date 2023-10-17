import React, { ReactNode } from 'react';

interface CompLayoutProps {
    children: ReactNode;
    className?: string;
}

const CompLayout = ({ children, className }: CompLayoutProps) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${ className }`}>
            {children}
        </div>
    );
};

export default CompLayout;