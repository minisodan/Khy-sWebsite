const SVGWrapper = ({ size, color, children }) => (
  <span class={`[&>svg]:h-${size} [&>svg]:w-${size} [&>svg]:fill-[${color}]`}>
    {children}
  </span>
);
export default SVGWrapper;
