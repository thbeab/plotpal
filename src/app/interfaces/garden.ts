import { Plot } from './plot';

export interface Garden {
    id: string;
    ownerId?: string;
    name: string;
    description: string;
    location: string;
    plots: Plot[];
}