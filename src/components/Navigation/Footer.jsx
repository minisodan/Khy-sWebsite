const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="text-sm text-center text-zinc-50">
      <p>© {year} KHYЯON</p>
    </div>
  );
};

export default Footer;
