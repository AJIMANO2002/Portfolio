import { TypeAnimation } from 'react-type-animation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Ajith from '../assets/aji21.png';

function Home() {
  return (
    <section id="home" className="bg-black flex py-24 items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl text-white font-semibold">
            Hi I'm Ajith
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              1000,
              "UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-5xl text-gray-300 block"
          />

          <p className="text-lg text-gray-300">
            I’m passionate about building reliable, impactful software that helps people every day.
          </p>

          <button className="text-white border-2 border-white rounded-xl px-6 py-3 hover:border-red-950 hover:text-red-800 transition">
            <a href="#portfolio">Scroll Down <i className="bi bi-chevron-double-down ml-2"></i></a>
          </button>
        </div>

        {/* Right Side - Image with transparent gradient border */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[600px] rounded-full p-2  shadow-2xl">
            <img
              src={Ajith}
              alt="Ajith Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;