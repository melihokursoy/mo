import * as React from "react";
import { cn } from "../../utils/cn";
import { radius, border } from "../../styles/borders";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeLabel?: string;
  // expecting an Icon element from the UI lib (e.g. <Icon ... />) or a string URL
  icon?: React.ReactElement | string;
}

const variantStyles = {
  default: "bg-gray-200 text-gray-900",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
};

// Darker backgrounds for the icon circle to contrast with tag bg
const variantIconBg = {
  default: "bg-gray-300 text-gray-900",
  success: "bg-green-300 text-green-900",
  warning: "bg-yellow-300 text-yellow-900",
  error: "bg-red-300 text-red-900",
  info: "bg-blue-300 text-blue-900",
};

const sizeStyles = {
  sm: "h-4 px-2 text-xs",
  md: "h-5 px-2.5 text-sm",
  lg: "h-6 px-3 text-base",
};

// When an icon is present we remove left padding and use explicit heights so the
// icon can fill the visible tag height without vertical padding causing mismatch.
const sizeStylesWithIcon = {
  sm: "pl-0 pr-2 h-4 text-xs",
  md: "pl-0 pr-2.5 h-5 text-sm",
  lg: "pl-0 pr-3 h-6 text-base",
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
      icon,
      ...props
    },
    ref
  ) => {
    const iconVisible = !!icon;
    // icon wrapper sizes match removable button sizes so the icon fills visible tag height
    const iconSizeClass = size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6";
    const iconInnerPadding = size === "sm" ? "p-0.5" : size === "md" ? "p-1" : "p-1.5";

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium",
          radius.pill,
          variantStyles[variant],
          iconVisible ? sizeStylesWithIcon[size] : sizeStyles[size],
          className
        )}
        {...props}
      >
        {iconVisible && (
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-full flex-shrink-0 mr-2",
              iconSizeClass,
              variantIconBg[variant]
            )}
          >
            <span className={cn("h-full w-full inline-flex items-center justify-center box-border") as string}>
              {React.isValidElement(icon) ? (
                (() => {
                  const el = icon as React.ReactElement<{ className?: string }>;
                  const baseProps = el.props as unknown as Partial<typeof el.props>;
                  const newProps: Partial<typeof el.props> & React.AriaAttributes = {
                    ...baseProps,
                    className: cn((baseProps as { className?: string }).className, "h-full w-full", iconInnerPadding, "box-border"),
                    "aria-hidden": true,
                  };
                  return React.cloneElement(el, newProps as Partial<typeof el.props> & React.AriaAttributes);
                })()
              ) : typeof icon === "string" ? (
                <img src={icon} alt="" className={cn("h-full w-full object-cover", iconInnerPadding, "box-border")} aria-hidden />
              ) : (
                icon
              )}
            </span>
          </span>
        )}

        <span className={cn("inline-flex items-center")}>{children}</span>

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
