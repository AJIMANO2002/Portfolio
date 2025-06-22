import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_afcja5h',      // 🔁 Replace with your EmailJS service ID
      'template_wnknnwt',     // 🔁 Replace with your template ID
      form.current,
      'dYaXd8QMw67I-q1Gp'       // 🔁 Replace with your public key
    ).then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message.');
      console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-12 bg-black px-4  md:px-20">
      <h2 className="text-4xl text-center text-red-800 font-black mb-20">Contact</h2>

      <div className="max-w-6xl mx-20  grid md:grid-cols-2 gap-8 ">
        {/* Contact Info */}
        <div className="space-y-14 text-xl text-white">
          <p className="text-white text-6xl mb-14">Let's discuss your project.</p>

          <p>
            <i className="bi bi-phone-vibrate-fill mr-2 text-red-700"></i>
            +91 80566 24585
          </p>
          <p>
            <i className="bi bi-envelope-paper-fill mr-2 text-red-700"></i>
            <a href="mailto:ajimano2002@gmail.com">
              ajimano2002@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-geo-alt-fill mr-2 text-red-700"></i>
            Tamil Nadu, India
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-16">
          <p className=" text-3xl tracking-widest font-bold text-white">
            I'm always open to discussing web-based work or partnerships.
          </p>

          <div>
            <input
              type="text"
              name="from_name"
              placeholder='Name*'
              required
              className="w-full bg-transparent text-white text-2xl border-0 border-b-2 border-red-900 focus:outline-none  placeholder-white"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="from_email"
              placeholder="Email*"
              required
              className="w-full bg-transparent text-white text-2xl border-0 border-b-2 border-red-900 focus:outline-none  placeholder-white"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message*"
              required
              className="w-full bg-transparent text-white text-2xl border-0 border-b-2 border-red-900 focus:outline-none  placeholder-white"
            ></textarea>
          </div>

          <div className="text-left">
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
