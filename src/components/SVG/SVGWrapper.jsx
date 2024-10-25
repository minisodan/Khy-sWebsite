const SVGWrapper = ({ color, children }) => (
  <span class={`[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[${color}]`}>
    {children}
  </span>
);
export default SVGWrapper;
