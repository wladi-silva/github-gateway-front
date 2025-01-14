import React from 'react';

import Image from './Image';

interface UserProps {
    source: string;
    name: string;
    login: string;
}

export default function User({ source, name, login }: UserProps) {

    return (
        <div className="flex flex-col items-center">
            <Image
                source={source} />
            <div className="mt-2">
                <h6 className="text-slate-800 font-medium text-center text-lg md:text-xl">
                    {name}
                </h6>
                <h6 className="text-slate-500 text-sm text-center md:text-base">
                    @ {login}
                </h6>
            </div>
        </div>
    );
}