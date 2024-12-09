import axios, { AxiosError } from 'axios';

interface User {
    login: string;
    url: string;
    avatar: string;
}

interface Repository {
    name: string;
    url: string;
    description: string;
}

interface ListItem {
    language: string;
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
        return response.data.map((repo) => ({
            language: 'https://path.to/language/icon.png', 
            title: repo.name,
            description: repo.description || 'Sem descrição',
        }));
    } catch (error) {
        isNotFoundError(error);
        return [];
    }
};

const isNotFoundError = (error: unknown): boolean => {
    return axios.isAxiosError(error) && error.response?.status === 404;
};

