import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /** deadline as Date | timestamp | ISO string */
  deadline: string | number | Date;
  /** optional callback when countdown reaches zero */
  onComplete?: () => void;
  /** visual variant to match Button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** size to align with Button sizes */
  size?: 'sm' | 'md' | 'lg';
}

function parseDeadline(value: string | number | Date) {
  if (value instanceof Date) return value.getTime();
  const n = Number(value);
  if (!Number.isNaN(n)) return n;
  const d = Date.parse(String(value));
  return Number.isNaN(d) ? NaN : d;
}

function formatRemaining(ms: number) {
  if (ms <= 0) return { expired: true, text: '00:00:00' };
  const total = Math.floor(ms / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const pad = (n: number) => String(n).padStart(2, '0');
  const h = pad(hours + days * 24);
  const m = pad(minutes);
  const s = pad(seconds);
  const text = days > 0 ? `${days}d ${h}:${m}:${s}` : `${h}:${m}:${s}`;
  return { expired: false, text };
}

export const Countdown = React.forwardRef<HTMLDivElement, CountdownProps>(
  ({ deadline, onComplete, className, variant = 'primary', size = 'md', ...props }, ref) => {
    const target = React.useMemo(() => parseDeadline(deadline), [deadline]);
    const variantStyles: Record<string, string> = {
      primary: 'bg-primary-600 text-white',
      secondary: 'bg-secondary-600 text-white',
      outline: 'border-2 border-primary-600 text-primary-600 bg-transparent',
      ghost: 'text-gray-700 bg-transparent',
    };

    const sizeTextStyles: Record<NonNullable<CountdownProps['size']>, string> = {
      sm: 'text-sm px-2 py-0.5 rounded',
      md: 'text-base px-3 py-1 rounded',
      lg: 'text-lg px-4 py-1.5 rounded',
    };
    const [now, setNow] = React.useState(() => Date.now());
    const [expired, setExpired] = React.useState(false);

    React.useEffect(() => {
      if (Number.isNaN(target)) return undefined;
      setNow(Date.now());
      const id = setInterval(() => setNow(Date.now()), 1000);
      return () => clearInterval(id);
    }, [target]);

    React.useEffect(() => {
      if (Number.isNaN(target)) return;
      if (now >= target && !expired) {
        setExpired(true);
        onComplete?.();
      }
    }, [now, target, expired, onComplete]);

    const remaining = formatRemaining(target - now);
    const appliedVariant = expired ? 'expired' : variant;
    const expiredClass =
      variant === 'ghost'
        ? 'text-red-600 bg-transparent'
        : variant === 'outline'
        ? 'border-2 border-red-600 text-red-600 bg-transparent'
        : 'bg-red-600 text-white';
    const variantClass = expired ? expiredClass : variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center font-mono',
          variantClass,
          sizeTextStyles[size],
          className
        )}
        {...props}
      >
        {Number.isNaN(target) ? 'Invalid date' : remaining.text}
      </div>
    );
  }
);

Countdown.displayName = 'Countdown';

export default Countdown;
