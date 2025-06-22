import Auction from '../assets/auction.png';
import Movie from '../assets/movie.png';
import Addtocart from '../assets/addtocart.png';
import Calculator from '../assets/calcu.png';
import Game from '../assets/game.png';
import CRED from '../assets/cred.png';



function Portfolio() {
    return (
        <div className="w-full min-h-screen bg-black text-white px-6 py-12" id="portfolio">
            <h2 className="text-4xl text-red-800 font-bold text-center mb-10">My Portfolio</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

                <a
                    href="https://auctionplatformdev.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-64 hover:shadow-white transition-all duration-300 block"
                >
                    <div className="absolute top-0 left-0 w-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <h3 className="text-lg font-semibold">Auction Platform</h3>
                        <p className="text-sm mt-1">
                            A full-featured auction app where users can place bids and sellers can manage products. Built with the MERN stack.
                        </p>
                    </div>
                    <img
                        src={Auction}
                        alt="Auction Platform"
                        className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                    />
                </a>


 <a
                    href="https://movie-appdev.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-64 hover:shadow-white transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <h3 className="text-lg font-semibold">Movie App</h3>
                            <p className="text-sm mt-1">
                                OMDB API to allow users to search for movies, view detailed information, and manage a list of favorite movies.                        </p>
                        </div>
                        <img
                            src={Movie}
                            alt="Project 2"
                            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                        />
                    </div>
                </a>


                <a
                    href="https://iecalculator.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-64 hover:shadow-white transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <h3 className="text-lg font-semibold">Income Expense Calculator</h3>
                            <p className="text-sm mt-1">
                                This project should allow the users to add, edit, and delete income and expense entries, providing an overview of their financial status.                     </p>
                        </div>
                        <img
                            src={Calculator}
                            alt="Project 4"
                            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                        />
                    </div>

                </a>

                <a
                    href="https://devmemorygame.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-64 hover:shadow-white transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <h3 className="text-lg font-semibold">Memory Game</h3>
                            <p className="text-sm mt-1">
                                Memory Game where players flip cards to find matching pairs.  </p>
                        </div>
                        <img
                            src={Game}
                            alt="Project 5"
                            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                        />
                    </div>
                </a>





                <a
                    href="https://routercartdev.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-64 hover:shadow-white transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <h3 className="text-lg font-semibold">Add to Cart</h3>
                            <p className="text-sm mt-1">
                                Here I develop a add to cart functionality and then i implement third party Api.                      </p>
                        </div>
                        <img
                            src={Addtocart}
                            alt="Project 3"
                            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                        />
                    </div>
                </a>



                <a
                    href="https://js-cred.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="relative bg-gray-900 p-4 rounded-xl shadow-lg group overflow-hidden w-full h-64 hover:shadow-white transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full p-4 bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <h3 className="text-lg font-semibold">CRED</h3>
                            <p className="text-sm mt-1">
                                four fundamental functions for managing persistent data: Create, Read, Update, and Delete.</p>
                        </div>
                        <img
                            src={CRED}
                            alt="Project 5"
                            className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                        />
                    </div>
                </a>

            </div>
        </div >
    );
}
export default Portfolio;