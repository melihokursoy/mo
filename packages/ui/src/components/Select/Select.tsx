import * as React from "react";
import { cn } from "../../utils/cn";
import { Tag } from "../Tag/Tag";
import { Badge } from "../Badge/Badge";

export type SelectItem = {
  value: string;
  label: React.ReactNode;
  icon?: string; // optional URL to an icon image
  disabled?: boolean;
};

export type SelectGroup = {
  label: string;
  items: SelectItem[];
};

export type SelectSource = SelectItem | SelectGroup;

export interface SelectProps {
  items: SelectSource[];
  placeholder?: string;
  multiselect?: boolean;
  multiline?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  items,
  placeholder = "Select...",
  multiselect = false,
  multiline = false,
  value,
  onChange,
  className,
}) => {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<string[]>(
    Array.isArray(value) ? value : value ? [value] : []
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(Array.isArray(value) ? value : value ? [value] : []);
    }
  }, [value]);

  React.useEffect(() => {
    // Reset last emitted value when controlled `value` changes externally
    lastEmittedRef.current = null;
  }, [value, multiselect]);

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const isSelected = (v: string) => internalValue.includes(v);
  const lastEmittedRef = React.useRef<string | null>(null);

  const emitChange = (next: string[]) => {
    const payload = multiselect ? JSON.stringify(next) : next[0] || "";
    if (lastEmittedRef.current === payload) return;
    lastEmittedRef.current = payload;
    if (onChange) onChange(multiselect ? next : next[0] || "");
  };

  const toggleSelect = (v: string) => {
    let next: string[];
    if (multiselect) {
      next = isSelected(v)
        ? internalValue.filter((x) => x !== v)
        : [...internalValue, v];
    } else {
      next = isSelected(v) ? [] : [v];
      setOpen(false);
    }

    emitChange(next);
    if (value === undefined) setInternalValue(next);
  };

  const removeValue = (v: string) => {
    const next = internalValue.filter((x) => x !== v);
    emitChange(next);
    if (value === undefined) setInternalValue(next);
  };

  const selectedItemsMap = React.useMemo(() => {
    const map = new Map<string, SelectItem>();
    const collect = (src: SelectSource[]) => {
      src.forEach((s) => {
        if ("items" in s) s.items.forEach((it) => map.set(it.value, it));
        else map.set(s.value, s);
      });
    };
    collect(items);
    return map;
  }, [items]);

  const tagsContainerRef = React.useRef<HTMLSpanElement | null>(null);
  const [visibleCount, setVisibleCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (multiline) {
      setVisibleCount(null);
      return;
    }

    let raf: number | undefined;
    let timeout: number | undefined;

    const measure = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const container = tagsContainerRef.current;
        if (!container) {
          setVisibleCount(null);
          return;
        }

        const containerWidth = container.clientWidth;
        if (containerWidth === 0) {
          setVisibleCount(null);
          return;
        }

        // Get all tag elements (they're always rendered, some may be hidden)
        const tagEls = Array.from(
          container.querySelectorAll('[data-role="select-tag"]')
        ) as HTMLElement[];
        
        if (!tagEls.length) {
          setVisibleCount(null);
          return;
        }

        // Get badge element if present
        const badgeEl = container.querySelector('[data-role="count-badge"]') as HTMLElement | null;

        // Compute gap from container
        const containerStyle = window.getComputedStyle(container);
        const gap = parseFloat(containerStyle.gap || containerStyle.columnGap || "0") || 0;

        // Measure each tag's width
        const tagWidths: number[] = tagEls.map((el) => el.offsetWidth);

        // First check: do all tags fit without any badge?
        let totalWidthAllTags = 0;
        for (const [i, w] of tagWidths.entries()) {
          totalWidthAllTags += w + (i > 0 ? gap : 0);
        }

        if (totalWidthAllTags <= containerWidth) {
          // All tags fit, no badge needed
          setVisibleCount(tagEls.length);
          return;
        }

        // Not all tags fit, so we need a badge. Measure or estimate badge width.
        let badgeWidth = badgeEl ? badgeEl.offsetWidth : 40;

        // Calculate how many tags fit WITH space reserved for the badge
        let usedWidth = 0;
        let fitCount = 0;

        for (const [i, tagWidth] of tagWidths.entries()) {
          const gapBeforeTag = i > 0 ? gap : 0;
          const gapBeforeBadge = gap;
          const effectiveTagWidth = tagWidth ?? 0;

          // Space needed: current tag + gap before badge + badge
          const spaceNeeded = usedWidth + gapBeforeTag + effectiveTagWidth + gapBeforeBadge + badgeWidth;

          if (spaceNeeded <= containerWidth) {
            usedWidth += gapBeforeTag + effectiveTagWidth;
            fitCount = i + 1;
          } else {
            break;
          }
        }

        // Ensure at least 1 tag is shown
        fitCount = Math.max(1, fitCount);

        setVisibleCount(fitCount);
      });
    };

    measure();

    const onResize = () => {
      if (timeout) clearTimeout(timeout);
      timeout = window.setTimeout(measure, 50);
    };
    window.addEventListener("resize", onResize);

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && tagsContainerRef.current) {
      ro = new ResizeObserver(onResize);
      ro.observe(tagsContainerRef.current);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [internalValue, multiline]);

  return (
    <div ref={containerRef} className={cn("relative inline-block w-full", className)}>
      <div className="flex items-center">
        <div
          role="combobox"
          tabIndex={0}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((s) => !s);
            }
            if (e.key === "Escape") setOpen(false);
          }}
          className={cn(
            "w-full inline-flex items-center justify-between rounded-lg border bg-white px-4 py-2 text-gray-900 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500",
            multiselect ? "" : "",
            open ? "ring-1 ring-gray-300" : ""
          )}
        >
          <div className="flex-1">
            {multiselect && internalValue.length > 0 ? (
              <span
                ref={tagsContainerRef}
                className={cn(
                  "relative flex gap-1 items-center",
                  multiline ? "flex-wrap" : "overflow-hidden whitespace-nowrap",
                )}
              >
                {/* Always render all tags for measurement; hide overflowed ones via CSS */}
                {internalValue.map((v, index) => {
                  const isHidden = !multiline && visibleCount !== null && index >= visibleCount;
                  return (
                    <span
                      key={v}
                      data-role="select-tag"
                      className={cn(
                        "flex-shrink-0 inline-block",
                        isHidden && "invisible absolute pointer-events-none"
                      )}
                    >
                      <Tag
                        size="sm"
                        removable
                        removeLabel={`Remove ${selectedItemsMap.get(v)?.label ?? v}`}
                        onRemove={(e) => {
                          e.stopPropagation();
                          removeValue(v);
                        }}
                      >
                        {selectedItemsMap.get(v)?.label ?? v}
                      </Tag>
                    </span>
                  );
                })}
                {/* Show badge when there are hidden tags */}
                {!multiline && visibleCount !== null && visibleCount < internalValue.length && (
                  <span data-role="count-badge" className="flex-shrink-0 inline-block">
                    <Badge size="sm" variant="info">+{internalValue.length - visibleCount}</Badge>
                  </span>
                )}
              </span>
            ) : internalValue.length > 0 ? (
              <span className="text-sm text-gray-900">
                {selectedItemsMap.get(internalValue[0]!)?.label ?? placeholder}
              </span>
            ) : (
              <span className="text-sm text-gray-400">{placeholder}</span>
            )}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="ml-2 h-4 w-4 text-gray-600">
            <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </div>

      {open && (
        <div className="absolute z-40 mt-2 w-56 bg-white border rounded shadow-lg">
          <div className="p-1">
            {items.map((groupOrItem, gi) => {
              if ("items" in groupOrItem) {
                return (
                  <div key={gi} className="mb-2">
                      <div className="flex items-center justify-between px-2 py-1 text-xs text-gray-500 font-medium">
                        <div>{groupOrItem.label}</div>
                        <div>
                          {multiselect && (
                            <input
                              type="checkbox"
                              aria-label={`Select all ${groupOrItem.label}`}
                              checked={groupOrItem.items.every((it) => isSelected(it.value))}
                              onChange={() => {
                                // toggle all in group
                                const all = groupOrItem.items.map((it) => it.value);
                                const allSelected = all.every((v) => isSelected(v));
                                let next: string[];
                                if (multiselect) {
                                  if (allSelected) {
                                    next = internalValue.filter((v) => !all.includes(v));
                                  } else {
                                    next = [...internalValue, ...all.filter((v) => !internalValue.includes(v))];
                                  }
                                } else {
                                  // single select: select first item or clear
                                  next = allSelected ? [] : (all[0] ? [all[0]] : []);
                                  setOpen(false);
                                }
                                emitChange(next);
                                if (value === undefined) setInternalValue(next);
                              }}
                            />
                          )}
                        </div>
                      </div>
                        {groupOrItem.items.map((it) => (
                          <button
                            key={it.value}
                            type="button"
                            disabled={it.disabled}
                            onClick={() => toggleSelect(it.value)}
                            className={cn(
                              "w-full text-left px-2 py-2 rounded hover:bg-gray-50 flex items-center gap-2",
                              isSelected(it.value) ? "bg-gray-100" : ""
                            )}
                          >
                            {it.icon && (
                              <img src={it.icon} alt="" className="h-4 w-4 rounded" />
                            )}
                            <span className="flex-1">{it.label}</span>
                            <span className="w-6 flex items-center justify-end">
                              {isSelected(it.value) && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  className="h-4 w-4"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                          </button>
                        ))}
                  </div>
                );
              }

              return (
                <button
                  key={groupOrItem.value}
                  type="button"
                  disabled={groupOrItem.disabled}
                  onClick={() => toggleSelect(groupOrItem.value)}
                  className={cn(
                    "w-full text-left px-2 py-2 rounded hover:bg-gray-50 flex items-center gap-2",
                    isSelected(groupOrItem.value) ? "bg-gray-100" : ""
                  )}
                >
                  {groupOrItem.icon && (
                    <img src={groupOrItem.icon} alt="" className="h-4 w-4 rounded" />
                  )}
                  <span className="flex-1">{groupOrItem.label}</span>
                  <span className="w-6 flex items-center justify-end">
                    {isSelected(groupOrItem.value) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
