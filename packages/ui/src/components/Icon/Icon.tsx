import * as React from 'react';
import type { IconProps as PhosphorIconProps } from 'phosphor-react';
import { cn } from '../../utils/cn';

export interface IconProps extends Omit<PhosphorIconProps, 'weight'> {
  icon: React.ForwardRefExoticComponent<PhosphorIconProps & React.RefAttributes<SVGSVGElement>>;
  weight?: PhosphorIconProps['weight'];
  className?: string;
  color?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = 24, weight = 'regular', className, color, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        size={size}
        weight={weight}
        color={color}
        data-color={color}
        className={cn('inline-block', className)}
        aria-hidden
        {...(props as PhosphorIconProps)}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
