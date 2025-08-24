import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-charcoal-900 border-t border-gray-200 dark:border-charcoal-500">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-charcoal-500 dark:text-gray-400 text-sm">
            © Asutosh, Designed and built this with{" "}
            <Heart className="inline w-4 h-4 text-red-500 mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
