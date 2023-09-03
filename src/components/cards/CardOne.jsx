const CardOne = () => {
  return (
    <div className="hero p-32 md:max-h-[1290] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="industry-fintech.svg" className="w-1/2 rounded-lg " />
        <div>
          <h1 className="text-6xl font-semibold mb-3">Fintech Solution</h1>
          <h1 className="text-4xl font-medium">Transforming Fintech with AI</h1>
          <p className="py-6 text-xl">
            Empower your financial institution with our advanced fintech
            solutions. From real-time fraud detection to easy bookkeeping, our
            software development services provide credit risk scoring for
            accurate lending eligibility, transaction categorization for
            seamless organization, and anomaly detection to safeguard your
            assets
          </p>
          <button className="btn btn-outline rounded-full border-white">
            See full case{" "}
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

export default CardOne;
