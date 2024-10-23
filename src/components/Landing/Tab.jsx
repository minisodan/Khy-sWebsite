const Tab = ({ text, link }) => (
  <a
    class="uppercase font-semibold bg-zinc-50 text-slate-800 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-purple-950 after:transition-transform after:duration-300 hover:after:scale-x-100"
    href={link}
  >
    {text}
  </a>
);

export default Tab;
