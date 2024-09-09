import { Client } from "@/types/clients";

const clients: Client[] = [
    {
        id: '1',
        name: 'The Rise of Artificial Intelligence',
        email: 'Artificial Intelligence (AI) is revolutionizing various industries...',
        phone: 'John Doe',
        date: '2024-05-01',
        IsActive: true, 
        document: [
            { id: '1', clientId: '1', content: 'Jane', status: 'pending', date: '2024-05-01' },
            { id: '2', clientId: '1', content: 'Jane', status: 'pending', date: '2024-05-01' },
        ],
    },
];
export default clients;