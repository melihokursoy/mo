import * as React from "react";
import { cn } from "../../utils/cn";
import { radius, border } from "../../styles/borders";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeLabel?: string;
}

const variantStyles = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      removable = false,
      onRemove,
      removeLabel = "Remove",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium",
          radius.pill,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {removable && (
          <button
            type="button"
            aria-label={removeLabel}
            onClick={onRemove}
            className={cn(
              "ml-2 inline-flex items-center justify-center",
              radius.pill,
              border.ring,
              size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className={cn(size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5")}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
