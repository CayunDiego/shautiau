import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children, subtitle, className, ...props }) => {
  return (
    <div className="mb-10 md:mb-16 text-center">
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight',
          className
        )}
        {...props}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 md:mt-4 text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
