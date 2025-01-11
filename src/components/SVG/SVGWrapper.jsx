const SVGWrapper = ({ children }) => (
  <svg
    className={`h-10 w-10 transition-colors duration-300 ease-in-out bg-zinc-50 fill-gray-400 hover:fill-slate-800`}
  >
    {children}
  </svg>
);
export default SVGWrapper;
