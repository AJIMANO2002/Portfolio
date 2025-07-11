import aji22 from "../assets/ajithkumar.png";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen text-white py-34 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${aji22})` }}
    >

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-bold text-red-800">About Me</h2>
          <p>
            Hi! I'm Ajith Kumar, a passionate Full Stack Developer with a strong foundation in web development and a love for building user-friendly applications.
          
        
            My journey began with curiosity and the desire to create. Through real-world projects, I’ve learned the value of clean design, performance, and responsive user experiences.
          </p>

          <p>
            I believe in continuous learning and enjoy building full-stack apps that solve real problems using the latest tools and best practices.
          </p>


          <div>
            <h3 className="text-3xl font-bold text-red-800">Personal Info</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p><span className="font-semibold">Name:</span> Ajith Kumar</p>
              <p><span className="font-semibold">Nationality:</span> Indian</p>
              <p><span className="font-semibold">Address:</span> Tamil Nadu, India</p>
              <p><span className="font-semibold">Email:</span> ajimano2002@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-2xl mt-30 items-end space-y-6">
          <div>I'm Ajith Kumar</div>
          <div className="text-red-800 font-black">Full Stack Developer</div>
          <a
            href="/AjithResume.pdf"
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