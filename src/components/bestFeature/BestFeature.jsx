import bestFeatureImg from "../../assets/bestFeature1.png";

const BestFeature = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl my-10">
        <span className="text-[#f96331]">iFixit</span> Best Features
      </h1>
      <div className="flex justify-center items-center gap-5">
        <div className="card w-80 bg-base-100 shadow-xl border-2">
          <div className="relative ">
            <div className="w-14 h-14 rounded-full bg-[#f96331] absolute top-10 left-[152px]"></div>
            <figure>
              <img className="z-10 pt-10" src={bestFeatureImg} />
            </figure>
          </div>
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title ">INSTANT REPAIR</h2>
            <p className="text-center">
              In case you need emergency <br /> repair service we are here to <br /> assist you with an instant repair.{" "}
              <br /> You will get your broken devices <br /> fixed in no time.
            </p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl border-2">
          <div className="relative ">
            <div className="w-14 h-14 rounded-full bg-[#f96331] absolute top-10 left-[152px]"></div>
            <figure>
              <img className="z-10 pt-10" src={bestFeatureImg} />
            </figure>
          </div>
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title ">INSTANT REPAIR</h2>
            <p className="text-center">
              In case you need emergency <br /> repair service we are here to <br /> assist you with an instant repair.{" "}
              <br /> You will get your broken devices <br /> fixed in no time.
            </p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl border-2">
          <div className="relative ">
            <div className="w-14 h-14 rounded-full bg-[#f96331] absolute top-10 left-[152px]"></div>
            <figure>
              <img className="z-10 pt-10" src={bestFeatureImg} />
            </figure>
          </div>
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title ">INSTANT REPAIR</h2>
            <p className="text-center">
              In case you need emergency <br /> repair service we are here to <br /> assist you with an instant repair.{" "}
              <br /> You will get your broken devices <br /> fixed in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFeature;
