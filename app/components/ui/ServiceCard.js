import Link from 'next/link';

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkHref,
  variant = 'default' 
}) {
  const cardClasses = variant === 'featured' 
    ? 'bg-gradient-to-br from-blue-50 to-red-50 border-2 border-blue-200' 
    : 'bg-white';

  return (
    <div className={`${cardClasses} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <Link 
        href={linkHref}
        className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center group"
      >
        {linkText}
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}