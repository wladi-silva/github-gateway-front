import React from 'react';

interface ListItem {
    language: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    login: string;
}

interface ListProps {
    list: ListItem[];
}

const MAX_DESCRIPTION_LENGTH = 40;

const createLink = (login: string, repository: string) => {
    return `https://github.com/${login}/${repository}`;
};

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
                        className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-default"
                    >
                        <div className="mr-4 grid place-items-center">
                            <item.language />
                        </div>
                        <div>
                            <a href={createLink(item.login, item.title)} target="_blank" rel="noopener noreferrer">
                            <h6 className="text-slate-800 font-semibold text-left md:text-base">
                                {item.title}
                            </h6>
                            </a>
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
