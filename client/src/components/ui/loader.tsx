import { useEffect, useState } from "react";

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-charcoal-900 z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4 animate-yin-yang">
          <div className="w-24 h-24 bg-charcoal-900 dark:bg-white rounded-full relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-white dark:bg-charcoal-900 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-white dark:bg-charcoal-900 rounded-full"></div>
            <div className="absolute top-3 right-3 w-6 h-6 bg-charcoal-900 dark:bg-white rounded-full"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 bg-charcoal-900 dark:bg-white rounded-full"></div>
          </div>
        </div>
        <p className="text-sm text-charcoal-500 dark:text-gray-400 font-poppins">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
