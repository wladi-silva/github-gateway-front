"use client";
import React from 'react';
import Card from './components/Card';

export default function Home() {
    const handleSearch = (value: string) => {
      
    };

    return (
        <Card
            title="GitHub Gateway"
            description="Descubra usuários e repositórios com facilidade. Explore projetos, contribuições e conecte-se com o mundo do código."
            placeholder="wladi-silva"
            onSearch={handleSearch}
        />
    );
}