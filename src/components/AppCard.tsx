'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppCardProps {
  title: string;
  description: string;
  href: string;
  badge?: string;
  icon: string;
}

export default function AppCard({ title, description, href, badge, icon }: AppCardProps) {
  const [navigating, setNavigating] = useState(false);
  const pathname = usePathname();

  // Reset navigating state when route changes (we've arrived or come back)
  useEffect(() => {
    setNavigating(false);
  }, [pathname]);

  return (
    <Link
      href={href}
      onClick={() => setNavigating(true)}
      className={`block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-[#006233]/30 transition-all group ${
        navigating ? 'pointer-events-none opacity-75' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-base font-semibold text-gray-900 group-hover:text-[#006233] transition-colors">
              {title}
            </h2>
            {badge && (
              <span className="text-xs font-medium bg-[#006233]/10 text-[#006233] px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        {navigating ? (
          <span className="w-5 h-5 border-2 border-[#006233] border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5" />
        ) : (
          <span className="text-gray-300 group-hover:text-[#006233] transition-colors text-lg">›</span>
        )}
      </div>
    </Link>
  );
}
