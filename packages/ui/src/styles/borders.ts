export const radius = {
  default: "rounded-lg",
  pill: "rounded-full",
};

export const border = {
  base: "border",
  color: "border-gray-300",
  focus: "focus:border-primary-500 focus:ring-primary-500",
  ring: "focus:outline-none focus:ring-2 focus:ring-offset-0",
};

export const input = `${border.base} ${border.color}`;

export default {
  radius,
  border,
  input,
};
