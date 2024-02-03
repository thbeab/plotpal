import { Plot } from './plot';

export interface Garden {
    id: string;
    name: string;
    location: string;
    size: number;
    plots: Plot[];
}