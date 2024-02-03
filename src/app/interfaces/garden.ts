import { Plot } from './plot';

export interface Garden {
description: any;
    id: string;
    name: string;
    descriptipn: string;
    location: string;
    plots: Plot[];
}