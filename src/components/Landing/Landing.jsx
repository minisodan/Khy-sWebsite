import Tab from "./Tab";

const Landing = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div class="flex flex-col h-screen bg-cover bg-center bg-landing-image">
      <div class="m-auto animate-fade-in-up flex gap-4 flex-col">
        <div class="border-solid border-2 border-slate-50 p-1">
          <h1 class="text-6xl p-1 font-semibold uppercase text-center bg-zinc-50 border-double border-4 text-slate-800">
            KHYЯON
          </h1>
        </div>
        <div class="flex justify-center gap-2 text-zinc-50 bg-zinc-50 border-double border-2 p-1">
          <Tab text="portfolio" link="/portfolio" />
          <Tab text="about" link="/about" />
          <Tab text="contact" link="/contact" />
          {/* email api*/}
          {/* <Tab text="email me" link=""/> */}
        </div>
      </div>
      <div>
        <footer class="flex justify-center text-zinc-50 mt-auto p-2">
          <span class="text-sm text-center">© {currentYear} KHYЯON</span>
        </footer>
      </div>
    </div>
  );
};
export default Landing;
