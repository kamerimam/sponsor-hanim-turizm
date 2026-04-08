import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905444986208"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
    </a>
  );
}
