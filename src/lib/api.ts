export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787';

export interface Lead {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  status: 'new' | 'contacted' | 'replied' | 'meeting' | 'closed';
  source: 'Google Maps' | 'Directory' | 'LinkedIn';
  created_at?: string;
}

export const api = {
  leads: {
    list: async (search = '', status = 'all'): Promise<Lead[]> => {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (status !== 'all') params.append('status', status);
      const res = await fetch(`${API_BASE}/api/leads?${params}`);
      if (!res.ok) throw new Error('Failed to fetch leads');
      return res.json();
    },
    create: async (lead: Omit<Lead, 'id' | 'created_at'>): Promise<Lead> => {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error('Failed to create lead');
      return res.json();
    },
  },
  stats: async () => (await fetch(`${API_BASE}/api/stats`)).json(),
  pipeline: async () => (await fetch(`${API_BASE}/api/pipeline`)).json(),
  recentLeads: async () => (await fetch(`${API_BASE}/api/recent-leads`)).json(),
};