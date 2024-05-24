import professionalReapairImg from "../../assets/proffesssionalImg.webp";

const ProfessionalRepair = () => {
  return (
    <div className="flex justify-center items-center max-w-[1200px] mx-auto">
      <div className="w-1/2">
        <p className="text-[42px] font-bold my-5">
          Your device in safe hands <br />
          with <br />
          <span className="text-[#F96331]">Our Professional Repair</span>
          <br /> Technicians
        </p>
        <div className="w-28 h-2 mb-8 bg-[#F96331]"></div>
        <p>
          In repairing Apple devices, no one can beat our success rate in Bangladesh. We can repair things that nobody
          could ever think of ...
        </p>
        <br />
        <p>
          Finding a trustworthy and trained Apple device technicians in Bangladesh is very difficult. We have seen so
          many of our beloved clients wandering around and getting cheated by fake technicians. When the name
          <span className="font-medium">ifixit</span> was discovered, they felt relaxed and free, they said.
        </p>
        <div className="flex justify-between w-[500px] rounded-full bg-gradient-to-r from-[#F1961A] to-[#FF522F] p-3 text-white my-5">
          <p>iPhone Repair</p>
          <p>97%</p>
        </div>
        <div className="flex justify-between w-[400px] rounded-full bg-gradient-to-r from-[#F1961A] to-[#FF522F] p-3 text-white mb-4">
          <p>iPad Repair</p>
          <p>80%</p>
        </div>
        <div className="flex justify-between w-[450px] mb-4 rounded-full bg-gradient-to-r from-[#F1961A] to-[#FF522F] p-3 text-white">
          <p>Macbook Repair</p>
          <p>90%</p>
        </div>
        <div className="flex justify-between w-[420px] mb-4 rounded-full bg-gradient-to-r from-[#F1961A] to-[#FF522F] p-3 text-white">
          <p>iMac Repair</p>
          <p>85%</p>
        </div>
        <div className="flex justify-between w-[360px] mb-4 rounded-full bg-gradient-to-r from-[#F1961A] to-[#FF522F] p-3 text-white">
          <p>Apple Watch Repair</p>
          <p>76%</p>
        </div>
      </div>
      <div className="w-1/2">
        <img src={professionalReapairImg} alt="" />
      </div>
    </div>
  );
};

export default ProfessionalRepair;
