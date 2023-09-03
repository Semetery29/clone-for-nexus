const ClientCard = ({ details }) => {
  const { logo, title, description } = details;
  return (
    <div className="w-96 shadow-xl pt-4 bg-gray-700 pb-32 mb-6">
      <figure className="px-10 pt-10">
        <img src={logo} alt={title} className="mx-auto" />
      </figure>
      <div className="text-center mt-4 p-4">
        <h2 className="text-2xl font-semibold my-4">{title}</h2>
        <p className="mt-2 p-4 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ClientCard;
