import { useEffect, useState } from "react";
import ClientCard from "./ClientCard";

const Clients = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch("companies.json");
      const json = await res.json();
      setData(json);
    };
    get();
  }, []);

  return (
    <div>
      <div className="text-center w-1/2 mx-auto">
        <h1 className="font-semibold text-6xl">Recent clients</h1>
        <p className="text-xl mt-4 mb-32">
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East World's 4th Strongest Banking Brand, Automobile & IoT
          industry
        </p>
      </div>
      <div className="w-5/6 mx-auto">
      <div className="md:grid grid-cols-3">
        {data.map((client) => (
          <ClientCard key={client.id} details={client} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Clients;
