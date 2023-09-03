const CardTwo = () => {
  return (
    <div className="hero p-32 md:max-h-[1290] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="industry-iot.webp" className="w-1/2 rounded-lg" />
        <div className="pl-6">
          <h1 className="text-6xl font-semibold mb-3">Industrial IoT</h1>
          <h1 className="text-4xl font-medium">Providing a better connected experience</h1>
          <p className="mt-4">
            <span className="px-3 py-1 rounded-full text-white bg-neutral mr-2">Connected Manufacturing</span>
            <span className="px-3 py-1 rounded-full text-white bg-neutral mr-2">Aviation</span>
            <span className="px-3 py-1 rounded-full text-white bg-neutral mr-2">Smart Building</span>
          </p>
          <p className="py-4 text-xl text-justify">
            Revolutionize your industry with our innovative IoT solutions. Our
            software development services offer connected manufacturing,
            pollution control, smart transportation, and intelligent farming,
            agriculture, and forestry. With our expertise, you can harness the
            power of technology to increase efficiency, reduce waste, and
            optimize operations for a sustainable future.
          </p>
          <button className="btn btn-outline rounded-full border-white">
            See full case Study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
      </div>
    </div>
  );
};

export default CardTwo;
