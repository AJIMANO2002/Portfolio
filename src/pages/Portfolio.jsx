import auction from '../assets/Auction.png';
import movie from '../assets/Movie.png';
import addtocart from '../assets/Addtocart.png';

function Portfolio() {
    const projects = [
        {
            title: "Auction Platform",
            img: auction,
            description: "A full-featured auction app where users can place bids and sellers can manage products.",
            tech: ["MERN", "Tailwind CSS", "JWT", "NodeMailer"],
            live: "https://auctionplatformdev.netlify.app",
            githubFrontend: "https://github.com/AJIMANO2002/Auction-Platform-Frontend",
            githubBackend: "https://github.com/AJIMANO2002/Auction-Platform-backend"
        },
        {
            title: "Movie Search App",
            img: movie,
            description: "OMDB API app where users can search movies, view details, and manage favorites.",
            tech: ["React", "Tailwind CSS", "OMDB API"],
            live: "https://movie-appdev.netlify.app",
            githubFrontend: "https://github.com/AJIMANO2002/Movie-app",
            githubBackend: null
        },
        {
            title: "E-Commerce Add to Cart",
            img: addtocart,
            description: "Add to cart functionality with product listing using Fake Store API.",
            tech: ["React", "Tailwind CSS", "Fake Store API"],
            live: "https://routercartdev.netlify.app",
            githubFrontend: "https://github.com/AJIMANO2002/cart-page",
            githubBackend: null
        }
    ];

    return (
        <div className="w-full min-h-screen bg-black text-white px-6 py-12" id="portfolio">
            <h2 className="text-4xl text-red-800 font-bold text-center mb-10">My Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-72 hover:shadow-white transition-all duration-300"
                    >
      
                        <div className="absolute top-0 left-0 w-full h-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-blue-600 text-xs px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 mt-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-800 hover:blue-red-950 text-white px-3 py-1 rounded-md text-sm"
                                >
                                    Live Demo
                                </a>
                                {project.githubFrontend && (
                                    <a
                                        href={project.githubFrontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-md text-sm"
                                    >
                                        GitHub (FE)
                                    </a>
                                )}
                                {project.githubBackend && (
                                    <a
                                        href={project.githubBackend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-md text-sm"
                                    >
                                        GitHub (BE)
                                    </a>
                                )}
                            </div>
                        </div>

                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
