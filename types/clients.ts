export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    document: ClientDocuments[]
    IsActive: boolean;
  }

  export interface ClientDocuments {
    id: string;
    clientId: string;
    content: string;
    status: 'pending' | 'in_progress' | 'approved' | 'completed';
    date: string;
  }