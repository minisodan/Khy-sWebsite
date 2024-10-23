function About() {
  return (
    <div className="flex flex-col h-screen items-center p-6 bg-about-image ">
      <img
        src={"Images/KHYRON35.jpeg"}
        alt="KHYRON.III"
        className="w-full max-w-md mb-6"
      />
      <div className="max-w-xl text-center bg-white p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Bio</h2>
        <p className="text-gray-700">
          Born in Texas, but raised in Louisiana, Khy is currently attending
          MNSU for an Art Degree. He has been doing photography for only a year
          now. In May 2021, he bought his first DSLR Camera [Sony A7iii] and
          consistently uploads his photos on this website or his Instagram
          account [@khyron.iii]. Khy has an eye for capturing real "in the
          moment" pictures and strives to make the viewer feel like they are
          actually there in the photo. He mainly does street photography, but
          really enjoys shooting anything—from nature to architecture to studio
          photographs.
        </p>
      </div>
    </div>
  );
}

export default About;
