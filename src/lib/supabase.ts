import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export interface ContactMessage {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// ---------- Veri Çekme Fonksiyonları ----------

export async function getTours(): Promise<Tour[]> {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Turlar yüklenemedi:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getBlogs(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Bloglar yüklenemedi:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Blog bulunamadı:", error.message);
    return null;
  }
  return data;
}

export async function sendContactMessage(msg: ContactMessage): Promise<boolean> {
  const { error } = await supabase
    .from("contact_messages")
    .insert([msg]);

  if (error) {
    console.error("Mesaj gönderilemedi:", error.message);
    return false;
  }
  return true;
}
