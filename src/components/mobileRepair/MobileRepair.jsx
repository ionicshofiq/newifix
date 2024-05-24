import {FaChevronRight} from "react-icons/fa";
import mobileRepairImg1 from "../../assets/mobileRepair1.png";
// import mobileRepairImg2 from '../../assets/mobileRepair2.png'

const MobileRepair = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center gap-10 max-w-[1200px] mx-auto my-14">
        <div className="flex justify-center items-center gap-10 w-1/2">
          <div>
            <img src={mobileRepairImg1} alt="" />
            <h2 className="font-bold text-xl">Liquid Damage</h2>
            <p>
              Wrost thing that can happen to your <br /> device is get damaged by liquid. <br /> Sooner you bring it to
              us is better <br />
              for your device.
            </p>
          </div>
          <div>
            <img src={mobileRepairImg1} alt="" />
            <h2 className="font-bold text-xl">Liquid Damage</h2>
            <p>
              Wrost thing that can happen to <br /> your device is get damaged by <br /> liquid. Sooner you bring it to
              us is <br />
              better for your device.
            </p>
          </div>
        </div>
        <div className="text-right flex flex-col gap-4">
          <p className="text-4xl font-semibold">
            We Make <br />
            <span className="text-[#F96331]"> Mobile Repair</span> Stress free
          </p>
          <div className="flex justify-end mt-8">
            <div className="w-32 h-2 bg-[#F96331]"></div>
          </div>
          <p>
            Once you have found and reached ifixit to repair your important devices,
            <br /> you do not need to be worried. We will be careful as much as you are...
          </p>
          <div className="flex justify-end items-center">
            <button className="bg-[#F96331] rounded-3xl w-40 h-12 text-white p-3 flex justify-center items-center text-lg ">
              View more
              <FaChevronRight className="text-base ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your <br /> device is get damaged by liquid. <br /> Sooner you bring it to us
            is better <br />
            for your device.
          </p>
        </div>
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your <br /> device is get damaged by liquid. <br /> Sooner you bring it to us
            is better <br />
            for your device.
          </p>
        </div>
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your <br /> device is get damaged by liquid. <br /> Sooner you bring it to us
            is better <br />
            for your device.
          </p>
        </div>
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your <br /> device is get damaged by liquid. <br /> Sooner you bring it to us
            is better <br />
            for your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileRepair;
