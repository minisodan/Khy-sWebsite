import NavBar from "../Navigation/NavBar";

function About() {
  return (
    <div class="flex flex-row bg-contact-image bg-no-repeat bg-cover bg-center">
      <NavBar />
      <div>
        <img src={"Images/KHYRON35.jpeg"} alt="KHYRON.III" />
        <div className="storyTime">
          <h2>Bio</h2>
          <p>
            Born in Texas, but raised in Louisiana and now currently attending
            MNSU for an Art Degree, Khy has been doing photography for only a
            year now. In May 2021, He bought his first DSLR Camera [Sony A7iii]
            and consistently uploads his photos on this website or his Instagram
            account [@khyron.iii] Khy has an eye for capturing real "In the
            moment" pictures and strives to make the viewer feel like they are
            actually there in the photo. He mainly does street photography, but
            really will shoot anything on his camera from nature to architecture
            to even studio photographs.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
