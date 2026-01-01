import * as React from "react";
import { cn } from "../../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

const variantStyles = {
  default: "bg-white",
  bordered: "bg-white border border-gray-200",
  elevated: "bg-white shadow-lg",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "bordered", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-xl p-6", variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 pb-4", className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-xl font-semibold text-gray-900", className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("text-gray-600", className)} {...props} />;
  }
);

CardContent.displayName = "CardContent";
