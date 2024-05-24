import {FiFacebook, FiInstagram, FiYoutube} from "react-icons/fi";
import logoImg from "../../assets/logo.png";
import payment from "../../assets/payment.png";
import loveImg from "../../assets/love.png";

const Footer = () => {
  return (
    <div className="h-[500px] bg-gradient-to-b from-[#FFE1D8] to-[#FFF9F6] mt-44">
      {/* white card area start */}
      <div className="relative text-center flex justify-center">
        <div className="card w-[1180px] h-[300px] bg-base-100 shadow-xl absolute -top-40 border-2">
          <div className="flex justify-center items-center gap-10 py-20">
            <div className="relative">
              <img className="absolute -top-4 right-3" src={loveImg} alt="" />
              <div className="w-40 h-14 pt-1 rounded-md bg-[#f96331] text-white text-center text-4xl">IFIXIT</div>
            </div>
            <div>
              <span className="text-4xl">Apple Service Center That You Will Love</span>
              <br /> <span className="text-2xl">we never compromise with our principles</span>
            </div>
            <div>
              <button className="bg-[#f96331] text-white w-40 py-2 rounded-md text-[23px] ">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* white card area end*/}
      <div className="flex justify-center items-center gap-10 pt-44 pb-5">
        <div className="border-0 border-r-2 border-[#f96331]">
          <img className="pr-10 " src={logoImg} alt="" />
        </div>
        <div>
          <p className="text-[#975C49]">Copyright</p>
          <p>ifixit.com.bd</p>
        </div>
      </div>
      <div>
        <hr className="" />
        <div className="flex justify-center items-center gap-20 text-xl font-semibold py-5">
          <a href="#">Terms & Condition</a>
          <a href="#">warranty policy</a>
          <a href="#">Refund policy</a>
          <a href="#">|Tracking</a>
        </div>
        <hr />
      </div>
      <div className="flex justify-center items-center gap-5 py-5">
        <a href="">
          <FiFacebook />
        </a>
        <a href="">
          {" "}
          <FiInstagram />
        </a>
        <a href="">
          <FiYoutube />
        </a>
      </div>
      <div className="flex">
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Footer;
