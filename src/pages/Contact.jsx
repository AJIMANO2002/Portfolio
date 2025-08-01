import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_afcja5h',
      'template_wnknnwt',
      form.current,
      'dYaXd8QMw67I-q1Gp'
    ).then(
      () => alert('Message sent successfully!'),
      (error) => {
        alert('Failed to send message.');
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-12 bg-black px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-4xl text-center text-red-800 font-black mb-16">Contact</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10 text-white">
          <p className="text-4xl sm:text-5xl font-bold">Let's connect.</p>

         
          <p className="text-lg sm:text-xl">
            <i className="bi bi-envelope-paper-fill mr-2 text-red-700"></i>
            <a href="mailto:ajimano2002@gmail.com" className="hover:underline">
              ajimano2002@gmail.com
            </a>
          </p>
          <p className="text-lg sm:text-xl">
            <i className="bi bi-geo-alt-fill mr-2 text-red-700"></i>
            Tamil Nadu, India
          </p>

        
          <div className="mt-10">
            <p className="text-white text-xl mb-4">Connect with me</p>
            <div className="flex gap-8 text-3xl sm:text-4xl">
              <a
                href="https://github.com/AJIMANO2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ajimano2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-10">
          <p className="text-2xl sm:text-3xl tracking-widest font-semibold text-white">
           Open to opportunities, collaborations, or simply connecting—feel free to reach out!
          </p>

          <div>
            <input
              type="text"
              name="from_name"
              placeholder="Name*"
              required
              className="w-full bg-transparent text-white text-lg sm:text-2xl border-0 border-b-2 border-red-900 focus:outline-none placeholder-white"
            />
          </div>

          <div>
            <input
              type="email"
              name="from_email"
              placeholder="Email*"
              required
              className="w-full bg-transparent text-white text-lg sm:text-2xl border-0 border-b-2 border-red-900 focus:outline-none placeholder-white"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message*"
              required
              rows={2}
              className="w-full bg-transparent text-white text-lg sm:text-2xl border-0 border-b-2 border-red-900 focus:outline-none placeholder-white"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-red-800 hover:bg-black px-6 py-3 rounded hover:text-red-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
