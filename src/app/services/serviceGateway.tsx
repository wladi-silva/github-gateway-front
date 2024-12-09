import axios from 'axios';
import { languageIcons } from '../icons/Icon';

interface User {
    login: string;
    name: string;
    avatarUrl: string;
}

interface Repository {
    name: string;
    language: string;
    description: string;
}

interface ListItem {
    language: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const serviceGateway = axios.create({
    baseURL: 'http://localhost:8080/api/github/',
});

export const fetchUser = async (username: string): Promise<User | null> => {
    try {
        const response = await serviceGateway.get<User>(`/${username}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        isNotFoundError(error);
        return null;
    }
};

export const fetchRepositories = async (username: string): Promise<ListItem[]> => {
    try {
        const response = await serviceGateway.get<Repository[]>(`/${username}/repos`);
        return response.data.map((repository) => ({
            language: languageIcons[repository.language] || languageIcons.Default,
            title: repository.name,
            description: repository.description || 'Sem descrição',
        }));
    } catch (error) {
        isNotFoundError(error);
        return [];
    }
};

const isNotFoundError = (error: unknown): boolean => {
    return axios.isAxiosError(error) && error.response?.status === 404;
};

