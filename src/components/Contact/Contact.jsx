import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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

    console.log("✏️", name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await emailjs.send(
        "service_71iv8ej",
        "template_31b0p0g",
        {
          // ✅ IMPORTANT: must match EmailJS template variables
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "9HLUYhCYC2oxTBOZS"
      );

      console.log("✅ SUCCESS:", response);

      setSuccessMessage("Your email has been sent successfully!");

      setFormData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("❌ FAILED EMAILJS");
      console.log("Error:", error);
      console.log("Error text:", error?.text);
      console.log("Status:", error?.status);

      setErrorMessage(
        error?.text || "There was an error sending your message."
      );
    } finally {
      setIsSending(false);
      console.log("🏁 Request finished");
    }
  };

  return (
    <div className="flex flex-col md:min-h-screen justify-center">
      <NavBar />

      <div className="flex flex-col items-center justify-center w-full pt-10 px-4 animate-fade-in-up">
        <div className="w-full max-w-3xl flex flex-col md:w-3/4 lg:w-2/3 p-6 gap-4 md:ml-44">

          {/* Header */}
          <div className="border-solid border-2 border-zinc-50 p-1">
            <div className="text-center bg-zinc-50 uppercase">
              <h1 className="text-4xl font-semibold uppercase">
                Contact Me
              </h1>
            </div>
          </div>

          {/* Socials */}
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

          {/* Email Form */}
          <div className="bg-zinc-50 flex flex-col text-center">
            <h2 className="p-2 text-2xl uppercase">E-Mail</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">

              <input
                name="email"
                type="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 w-full py-3 px-6 focus:outline-none focus:border-slate-800"
              />

              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 w-full py-3 px-6 focus:outline-none focus:border-slate-800"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-2 border-gray-200 w-full py-3 px-6 focus:outline-none focus:border-slate-800"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="resize-none border-2 border-gray-200 w-full py-3 px-6 h-40 focus:outline-none focus:border-slate-800"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full border-2 border-slate-800 px-6 py-3 bg-white text-slate-800 hover:bg-slate-800 hover:text-zinc-50 transition-colors duration-300"
              >
                {isSending ? "Sending..." : "SEND"}
              </button>
            </form>

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