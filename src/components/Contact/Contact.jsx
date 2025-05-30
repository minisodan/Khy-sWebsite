import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Navigation/Footer";
import Instagram from "../SVG/Instagram";
import Twitter from "../SVG/Twitter";
import SVGWrapper from "../SVG/SVGWrapper";
import NavBar from "../Navigation/NavBar";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_uopgtaq",
        "template_fxmd34e",
        e.target,
        "pO8ukJSDKrDmXM9ap"
      )
      .then(
        (result) => {
          setIsSending(false);
          setSuccessMessage("Your email has been sent successfully!");
          setFormData({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setIsSending(false);
          setErrorMessage(
            "There was an error sending your message. Please try again."
          );
        }
      );
  };

  return (
    <div className="flex flex-col md:min-h-screen justify-center">
      {" "}
      {/* Added justify-center for vertical centering */}
      {/* Full-width NavBar */}
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full pt-10 px-4 animate-fade-in-up">
        <div className="w-full max-w-3xl flex flex-col md:w-3/4 lg:w-2/3 p-6 gap-4 md:ml-44">
          {" "}
          {/* Increased max width */}
          <div className="border-solid border-2 border-zinc-50 p-1">
            <div className="text-center bg-zinc-50 uppercase">
              <h1 className="text-4xl font-semibold uppercase">Contact Me</h1>
            </div>
          </div>
          {/* Socials Section */}
          <div className="p-2 bg-zinc-50 flex flex-col justify-center gap-4 text-center">
            <h2 className="text-2xl uppercase">Socials</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://www.instagram.com/khyron.iii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <Instagram />
                </SVGWrapper>
              </a>
              <a
                href="https://x.com/PhotographAve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGWrapper>
                  <Twitter />
                </SVGWrapper>
              </a>
            </div>
          </div>
          {/* E-Mail Section */}
          <div className="bg-zinc-50 flex flex-col text-center">
            <h2 className="p-2 text-2xl uppercase">E-Mail</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
              <input
                name="email"
                className="border-2 border-gray-200 w-full py-3 px-6 leading-tight focus:outline-none focus:border-slate-800"
                type="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="name"
                className="border-2 border-gray-200 w-full py-3 px-6 leading-tight focus:outline-none focus:border-slate-800"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="subject"
                className="border-2 border-gray-200 w-full py-3 px-6 leading-tight focus:outline-none focus:border-slate-800"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="resize-none border-2 border-gray-200 w-full py-3 px-6 leading-tight focus:outline-none focus:border-slate-800 h-40"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full border-2 border-slate-800 px-6 py-3 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "SEND"}
              </button>
            </form>

            {/* Success or Error Message */}
            {successMessage && (
              <p className="text-green-500 mt-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
