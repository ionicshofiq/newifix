import {useEffect, useState} from "react";
// import cardBackground from "../../assets/cardBackground.jpg";  style={{backgroundImage: `url(${cardBackground})`}}

const Card = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(
      `https://erpmethods.vercel.app/gets/Item Group?filters=[["show_in_website", "=", 1]]&fields=["idx","route","name", "image"]`,
      {
        headers: {
          url: "https://ecommerce.ionicerp.xyz/",
          api_secret: "f4393c419474a1b",
          api_key: "84859bedced40f4",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);

  return (
    <div className="flex gap-3 justify-center items-center py-10">
      {groups.map((group, index) => (
        <div
          key={index}
          className="w-44 hover:-translate-y-3 duration-500 rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center ">
          <div className="w-24 cardBackground">
            <img className="p-3" src={group.image} alt="" />
          </div>
          <div className="font-bold text-lg text-center">{group.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
