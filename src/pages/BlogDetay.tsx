import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft, Share2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { getBlogBySlug, type BlogPost } from "@/lib/supabase";

export default function BlogDetay() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useSeo({
    title: post ? post.title : "Blog Yazısı",
    description: post ? post.excerpt : "Sponsor Hanım Turizm blog yazısı.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params.slug) {
      getBlogBySlug(params.slug).then((data) => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-serif font-bold mb-4">Blog Yazısı Bulunamadı</h1>
        <p className="text-muted-foreground mb-8">Aradığınız içerik kaldırılmış veya taşınmış olabilir.</p>
        <Button onClick={() => setLocation("/blog")}>Blog'a Dön</Button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={post.image_url}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="flex justify-center mb-6">
                <span className="bg-primary/90 text-primary-foreground backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-10">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl p-6 md:p-12 border border-border">
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-border">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Blog'a Dön
            </Link>

            <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div
            className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
