'use client';

import clsx from 'clsx';
import { Button } from '@/components/shared/ui/button';
import { GlowBg } from '@/components/shared/ui/glow-bg';
import Link from 'next/link';

/**
 * A simple Call to Action section with a title, description, and primary action button.
 * Designed to be used at the bottom of pages or between major sections.
 *
 * @example
 * <LandingSimpleCtaSection
 *   title="Ready to get started?"
 *   description="Join thousands of satisfied users today."
 *   buttonLabel="Sign Up Now"
 *   buttonLink="/register"
 *   variant="primary"
 *   withBackground
 *   withBackgroundGlow
 * />
 */
export const LandingSimpleCtaSection = ({
  // Core content props
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,

  // Functional props with sensible defaults
  buttonLabel = 'Get Started',
  buttonLink = '#',
  textPosition = 'center',
  variant = 'primary',

  // Boolean flags with defaults
  withBackground = false,
  withBackgroundGlow = false,
  
  // Event handlers with empty defaults
  onButtonClick,
}: {
  // Always use React.ReactNode for flexible content
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;

  // String props with specific values
  buttonLabel?: string;
  buttonLink?: string;
  textPosition?: 'center' | 'left';
  variant?: 'primary' | 'secondary';

  // Boolean props
  withBackground?: boolean;
  withBackgroundGlow?: boolean;

  // Event handlers
  onButtonClick?: () => void;
}) => {
  return (
    <section
      className={clsx(
        // Base classes first (required styling)
        'w-full flex flex-col justify-center items-center py-12 lg:py-20',

        // Conditional classes (variant-based)
        withBackground && variant === 'primary'
          ? 'bg-primary-50 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-50 dark:bg-secondary-900/10'
          : '',

        // State-dependent classes
        withBackgroundGlow ? 'relative overflow-hidden' : '',

        // User-provided className last
        className,
      )}
    >
      {/* Background effects */}
      {withBackgroundGlow ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <GlowBg className="w-full h-full opacity-50" />
        </div>
      ) : null}

      {/* Main content container */}
      <div
        className={clsx(
          'container px-4 md:px-6 flex flex-col items-center justify-center relative',
          innerClassName,
        )}
      >
        {/* Content wrapper */}
        <div
          className={clsx(
            'flex flex-col gap-6 max-w-3xl',
            textPosition === 'center'
              ? 'items-center text-center'
              : 'items-start',
          )}
        >
          {title ? (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
          ) : (
            titleComponent
          )}

          {description ? (
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {description}
            </p>
          ) : (
            descriptionComponent
          )}

          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className={clsx(
                variant === 'secondary' ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90',
              )}
              onClick={onButtonClick}
            >
              <Link href={buttonLink}>{buttonLabel}</Link>
            </Button>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
