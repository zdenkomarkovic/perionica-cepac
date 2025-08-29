import { cn } from '@/app/lib/utils';

const buttonVariants = {
  primary: 'bg-gradient-to-r from-blue-600 to-red-600 text-white hover:opacity-90',
  secondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600',
  outline: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600',
  ghost: 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3 text-lg'
};

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  return (
    <button
      className={cn(
        'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}