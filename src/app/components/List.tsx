import React from 'react';

interface ListItem {
    language: string;
    title: string;
    description: string;
}

interface ListProps {
    list: ListItem[];
}

const MAX_DESCRIPTION_LENGTH = 40;

const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
        ? `${description.slice(0, maxLength)} ...`
        : description;
};

export default function List({ list }: ListProps) {

    return (
        <div className="relative flex w-full max-w-6xl flex-col items-center rounded-lg border border-slate-200 bg-white shadow-sm p-4 sm:p-6 lg:p-8">
            <nav className="flex min-w-100 flex-col gap-1 p-1.5">
                {list.map((item, index) => (
                    <div
                        key={index}
                        role="button"
                        className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                    >
                        <div className="mr-4 grid place-items-center">
                            <img
                                alt={item.title}
                                src={item.language}
                                className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                            />
                        </div>
                        <div>
                            <h6 className="text-slate-800 font-medium text-left text-lg md:text-xl">
                                {item.title}
                            </h6>
                            <p className="text-slate-500 text-sm text-left md:text-base">
                                {truncateDescription(item.description, MAX_DESCRIPTION_LENGTH)}
                            </p>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    );
}
