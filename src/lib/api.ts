// Sponsor Hanim Backend API istemcisi
const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:3001/api';

async function request<T = unknown>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    let errorMsg = `API hatasi: ${res.status}`;
    try {
      const data = await res.json();
      errorMsg = data.error || data.message || errorMsg;
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  return res.json();
}

// ---------- Tip Tanımları ----------

export interface Tour {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image_url: string;
  description: string;
  detail_link: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  date: string;
  is_published: boolean;
}

// Rezervasyon olustur — backend'in beklediği şekil
export interface BookingTraveler {
  firstName: string;
  lastName: string;
  tcId: string;
  birthDate: string;
  phone: string;
  email: string;
}

export interface CreateBookingPayload {
  tourId: string;
  travelerCount: number;
  travelers: BookingTraveler[];
  paymentPlan: 'full' | 'deposit';
  paymentMethod: 'credit_card' | 'bank_transfer' | 'cash';
  specialRequests?: string;
}

export interface BookingResponse {
  message: string;
  booking: {
    id: number;
    booking_number: string;
    status: string;
    total_price: string | number;
    created_at: string;
  };
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

// ---------- Yüksek seviyeli veri çekme yardımcıları ----------

export async function getTours(): Promise<Tour[]> {
  try {
    return await request<Tour[]>('/tours');
  } catch (err) {
    console.error('Turlar yüklenemedi:', err);
    return [];
  }
}

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    return await request<BlogPost[]>('/blogs');
  } catch (err) {
    console.error('Bloglar yüklenemedi:', err);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await request<BlogPost>(`/blogs/${encodeURIComponent(slug)}`);
  } catch (err) {
    console.error('Blog bulunamadı:', err);
    return null;
  }
}

export async function sendContactMessage(payload: ContactMessagePayload): Promise<boolean> {
  try {
    await request('/contacts', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error('Mesaj gönderilemedi:', err);
    return false;
  }
}

// ---------- Eski "api" obje API'si (geri uyumluluk) ----------

export const api = {
  createBooking: (payload: CreateBookingPayload) =>
    request<BookingResponse>('/bookings', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  sendContactMessage: (payload: ContactMessagePayload) =>
    request('/contacts', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getTours,
  getBlogs,
  getBlogBySlug,

  getSettings: () => request('/settings'),
};
