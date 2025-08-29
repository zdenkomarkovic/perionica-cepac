import Link from 'next/link';
import { SITE_CONFIG } from '@/app/constants/site';

export default function Logo({ size = 'md', showText = true }) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-sm', logo: 'text-xs' },
    md: { container: 'w-10 h-10', text: 'text-xl', logo: 'text-lg' },
    lg: { container: 'w-16 h-16', text: 'text-3xl', logo: 'text-2xl' }
  };

  const currentSize = sizes[size];

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className={`${currentSize.container} bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
        <span className={`text-white font-bold ${currentSize.logo}`}>RR</span>
      </div>
      {showText && (
        <div>
          <h1 className={`font-bold text-gray-900 ${currentSize.text} leading-tight`}>
            {SITE_CONFIG.name}
          </h1>
          <p className="text-xs text-gray-600">Auto-hemija</p>
        </div>
      )}
    </Link>
  );
}