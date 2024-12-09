import React from 'react';

export default function Image({ source }: { source: string }) {

    return (
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img
                className="object-cover object-center rounded-full h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
                src={source}
            />
        </div>
    );
}