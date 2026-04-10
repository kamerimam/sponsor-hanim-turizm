import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Loader2 } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { getBlogs, type BlogPost } from "@/lib/api";

export default function Blog() {
  useSeo({
    title: "Seyahat Blog | Umre, Hac ve Gezi Rehberleri",
    description: "Umre hazırlıkları, hac rehberi, Mısır gezi ipuçları, Bali seyahat tavsiyeleri. Sponsor Hanım Turizm blog sayfası.",
    path: "/blog",
    keywords: "umre hazırlıkları, hac rehberi, mısır gezisi, bali seyahat, seyahat blog, ankara seyahat acentası blog",
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/5 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Seyahat Rehberi</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Sponsor Hanım Blog</h1>
            <p className="text-muted-foreground text-lg">
              Kutsal topraklardan egzotik adalara, seyahatinize ilham verecek hikayeler, rehberler ve ipuçları.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {!loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image_url}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                >
                  Devamını Oku <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>}
      </div>
    </div>
  );
}
