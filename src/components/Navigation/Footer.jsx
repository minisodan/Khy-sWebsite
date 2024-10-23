const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div class="text-center text-zinc-50">
      <p>© {year} Khyron, all rights reserved.</p>
    </div>
  );
};

export default Footer;
