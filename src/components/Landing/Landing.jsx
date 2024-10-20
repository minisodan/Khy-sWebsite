import Tab from "./Tab";
const Landing = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div class="flex flex-col h-screen bg-cover bg-center bg-landing-image">
      <div class="m-auto animate-fade-in-up flex gap-4 flex-col">
        <h1 class="text-6xl p-1 font-semibold uppercase text-center bg-blue-200 text-purple-950">
          Khyron
        </h1>
        <div class="flex justify-center gap-2 bg-blue-200 p-2">
          <Tab text="home" link="/" />
          <Tab text="about" link="/about" />
          <Tab text="contact" link="/contact" />
        </div>
      </div>
      <div>
        <footer class="flex justify-center bg-blue-200 text-purple-950 mt-auto p-2">
          <span class="text-sm text-center">© {currentYear} Khyron</span>
        </footer>
      </div>
    </div>
  );
};
export default Landing;
