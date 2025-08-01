function About() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white  py-34 px-6 bg-cover"
    >
      <div className=" max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-2 ">
        
      
        <div className="space-y-6 text-lg text-gray-300">
          <h2 className="text-4xl font-bold text-red-800">About Me</h2>
          <p>
            Hi ! I'm Ajith Kumar, a passionate Full Stack Developer with a strong foundation in web development and a love for building user-friendly applications.
            My journey began with curiosity and the desire to create. Through real-world projects, I’ve learned the value of clean design, performance, and responsive user experiences.
          </p>
          <p>
            I believe in continuous learning and enjoy building full-stack apps that solve real problems using the latest tools and best practices.
          </p>
          <div className="text-red-800 font-black text-2xl">Full Stack Developer</div>
          <a
            href="/AjithResume.pdf"
            download
            className="px-10 py-3 border-2 border-white  hover:border-red-950 hover:text-red-800 transition rounded-xl text-center "
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-col text-2xl mt-10 items-start md:ml-28 space-y-6">
          <h3 className="text-3xl font-bold text-red-800">Personal Info</h3>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
            <p><span className="font-semibold">Name:</span> Ajith Kumar</p>
            <p><span className="font-semibold">Nationality:</span> Indian</p>
            <p><span className="font-semibold">Address:</span> Tamil Nadu, India</p>
            <p><span className="font-semibold">Email:</span> ajimano2002@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
