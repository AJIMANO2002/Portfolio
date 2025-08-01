import { TypeAnimation } from 'react-type-animation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Ajith from '../assets/ajithkumar.jpg';

function Home() {
  return (
    <section id="home" className="bg-black py-16 sm:py-20 md:py-4">
      <div className="max-w-7xl mx-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 sm:px-8">
        <div className="w-full md:w-1/2 text-center md:text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
            Hi, I'm Ajith
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
            className="text-3xl sm:text-4xl md:text-5xl text-red-800 block"
          />

          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            I’m passionate about building reliable, impactful software that helps people every day.
          </p>

          <button className="text-white border-2 border-white rounded-xl px-6 py-3 hover:border-red-950 hover:text-red-800 transition">
            <a href="#portfolio">
              Scroll Down <i className="bi bi-chevron-double-down ml-2"></i>
            </a>
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-[600px] md:h-[650px] rounded-full shadow-2xl">
            <img
              src={Ajith}
              alt="Ajith Kumar"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
