import Tab from "../Tab";

const NavBar = () => (
  <div class="h-screen p-3">
    <div class="h-full flex flex-col gap-2">
      <div class="bg-zinc-50 p-2">
        <h1 class="text-3xl font-semibold uppercase">KhyЯon</h1>
      </div>
      <div class="h-full bg-zinc-50 flex flex-col p-2 px-5">
        <Tab text="portfolio" link="/portfolio" />
        <Tab text="about" link="/about" />
        <Tab text="contact" link="/contact" />
      </div>
    </div>
  </div>
);

export default NavBar;
