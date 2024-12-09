"use client";
import React from 'react';
import Card from './components/Card';
import List from './components/List';
import User from './components/User';

interface ListItem {
    language: string;
    tittle: string;
    description: string;
}

const listaDeItens: ListItem[] = [

];

export default function Home() {
    const handleSearch = (value: string) => {

    };

    return (
        <div className="p-4">
            <Card
                title="GitHub Gateway"
                description="Descubra usuários e repositórios com facilidade. Explore projetos, contribuições e conecte-se com o mundo do código."
                placeholder="wladi-silva"
                onSearch={handleSearch}
            />
            <div className="relative min-h-80 w-full flex flex-col items-center bg-white p-2 shadow-sm border border-slate-200 rounded-lg mt-4">
                <div className="w-full flex justify-center">
                    <User source="" name="" />
                </div>
                <div className="relative min-h-80 w-full flex flex-col items-center my-6 bg-white p-2">
                    <List
                        list={listaDeItens}
                    />
                </div>
            </div>
        </div>
    );
}