import l1 from "../../assets/Technology/web.svg";
import l2 from "../../assets/Technology/ios.svg";
import l3 from "../../assets/Technology/android.svg";
import l4 from "../../assets/Technology/hybrid.svg";
import l5 from "../../assets/Technology/wear.svg";
import l6 from "../../assets/Technology/tv.svg";

const Tech = () => {
  return (
    <div className="mt-20">
      <div className="text-center w-2/3 mx-auto">
        <h1 className="font-semibold text-6xl">
          Software for modern platforms
        </h1>
        <p className="text-xl mt-4 mb-32">
          We develop applications for mobile, web, wearables, and TV.
        </p>
      </div>

      <div className="grid grid-cols-6 mb-8">
        <div className=" grid justify-items-center">
          <img src={l1} alt="" />
          <p className="text-xl">Web</p>
        </div>
        <div className=" grid justify-items-center">
          <img src={l2} alt="" />
          <p className="text-xl">iOS</p>
        </div>
        <div className=" grid justify-items-center">
          <img src={l3} alt="" />
          <p className="text-xl">Android</p>
        </div>
        <div className=" grid justify-items-center">
          <img src={l4} alt="" />
          <p className="text-xl">Hybrid</p>
        </div>
        <div className=" grid justify-items-center">
          <img src={l5} alt="" />
          <p className="text-xl">Wearables</p>
        </div>
        <div className=" grid justify-items-center">
          <img src={l6} alt="" />
          <p className="text-xl">TV</p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
