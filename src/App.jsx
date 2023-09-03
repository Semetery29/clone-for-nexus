import Footer from "./components/Constant/Footer";
import Navbar from "./components/Constant/Navbar";
import Tech from "./components/Technologies/Tech";
import CardOne from "./components/cards/CardOne";
import CardThree from "./components/cards/CardThree";
import CardTwo from "./components/cards/CardTwo";
import Clients from "./components/client/Clients";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Banner */}
      {/* cards */}
      <CardOne />
      <CardTwo />
      <CardThree />
      {/* text */}
      <div className="my-24 text-center w-1/2 mx-auto">
        <h1 className="text-5xl font-bold">
          Check out more works by Geeks Invention
        </h1>
        <p className="text-lg mt-4">
          Our case studies describe design and development solutions implemented
          at our Geeks Invention projects. The stories are a valuable resource
          for those looking to develop their own mobile apps.
        </p>
        <button className="border text-xl border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 transition duration-300 ease-in-out rounded-full mt-8">
          See all case Studies{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
            />
          </svg>
        </button>
      </div>
      {/* clients */}
      <Clients />
      {/* Software Technologies */}
      <Tech />
      {/* Team and Work Details */}
      {/* Contact Section */}
      <Footer />
    </>
  );
};

export default App;
