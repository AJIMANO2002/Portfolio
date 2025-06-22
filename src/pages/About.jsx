import aji22 from "../assets/ajithkumar.png"; // Make sure the path is correct

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen text-white py-34 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${aji22})` }}
    >
      {/* Dark Overlay */}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-bold text-red-800">About Me</h2>
          <p>
            I design and develop services for customers specializing in creating
            stylish, modern websites, web applications, web services, and
            designing new features from ideation to production, implementation of
            wireframes and design flows in my web applications.
            I consider the user experience while writing reusable and efficient
            code. I passionately combine good design, technology, and innovation
            in all my projects.
          </p>

          <div>
            <h3 className="text-3xl font-bold text-red-800">Personal Info</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p><span className="font-semibold">Name:</span> Ajith Kumar</p>
              <p><span className="font-semibold">Nationality:</span> Indian</p>
              <p><span className="font-semibold">Freelance:</span> Available</p>
              <p><span className="font-semibold">Address:</span> Tamil Nadu, India</p>
              <p><span className="font-semibold">Email:</span> ajimano2002@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-2xl mt-30 items-end space-y-6">
          <div>I'm Ajith Kumar</div>
          <div className="text-red-800 font-black">Full Stack Developer</div>
          <a
            href="/assets/CV.pdf"
            download
            className="w-36 py-3 text-xl rounded-xl bg-red-800 hover:bg-red-900 text-center block"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;