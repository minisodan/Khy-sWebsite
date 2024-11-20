const Tab = ({ text, link, force }) => (
  <a
    className={
      "uppercase font-semibold bg-zinc-50 text-slate-800 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-slate-800 after:transition-transform after:duration-300 " +
      (force ? "after:scale-x-100" : "hover:after:scale-x-100 after:scale-x-0")
    }
    href={link}
  >
    {text}
  </a>
);

export default Tab;
