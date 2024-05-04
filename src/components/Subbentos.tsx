import Subbento0Svg from "../assets/svg/subbento0.svg";
import Subbento2Svg from "../assets/svg/subbento2.svg";
import Subbento3_0Svg from "../assets/svg/subbento3_0.svg";
import Subbento3_1Svg from "../assets/svg/subbento3_1.svg";
import Subbento3_2Svg from "../assets/svg/subbento3_2.svg";
import Subbento3_3Svg from "../assets/svg/subbento3_3.svg";
import Subbento4Svg from "../assets/svg/subbento4.svg";
import ProfilePic from "../assets/svg/profile_pic.png";
import Subbento5Svg from "../assets/svg/subbento5.svg";

export function Subbento0() {
  return (
    <>
      <div className="flex flex-row h-full ">
        <div className="w-2/3 flex flex-row justify-center items-center">
          <p className="text-white font-semibold text-2xl">
            2 Companies Served
          </p>
        </div>
        <div className="w-1/3 transform ease-in-out duration-500 hover:scale-110">
          <img src={Subbento0Svg} alt="subbento0_svg" className=" scale-150" />
        </div>
      </div>
    </>
  );
}

export function Subbento1() {
  return (
    <>
      <div className="flex flex-col h-full justify-center p-3">
        <div className=" text-white font-semibold text-2xl text-center mb-2">
          6
        </div>
        <div className=" text-white font-semibold text-2xl text-center mb-5">
          Total Projects
        </div>
        <div className="font-semibold text-lg text-gray-500 text-center tracking-wider">
          and counting!
        </div>
      </div>
    </>
  );
}

export function Subbento2() {
  return (
    <>
      <div className="flex flex-col h-full justify-center">
        <div className="text-white font-semibold text-2xl text-center mx-6 h-1/2 flex items-center">
          <p>Proficient in native and cross platform mobile development</p>
        </div>
        <div className="flex-grow flex justify-center">
          <img
            src={Subbento2Svg}
            alt="subbento2_svg"
            className="h-full transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export function Subbento3() {
  const socials = [
    Subbento3_0Svg,
    Subbento3_1Svg,
    Subbento3_2Svg,
    Subbento3_3Svg,
  ];

  return (
    <>
      <div className="flex flex-col h-full justify-center p-5">
        <div className="text-center font-semibold text-white text-2xl mb-5">
          More ways to reach out!
        </div>
        <div className="flex flex-col space-y-5 items-center">
          {socials.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`${item}_svg`}
              className="transform duration-500 ease-in-out hover:scale-150"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function Subbento4() {
  return (
    <>
      <div className="relative h-full">
        <div className=" absolute left-0 bottom-0 w-2/3">
          <img src={Subbento4Svg} alt="subbento4_svg" className="w-full transform duration-500 ease-in-out hover:scale-110" />
        </div>
        <div className="absolute right-0 h-full w-1/2">
          <div className="flex flex-col justify-center items-end mr-5 h-full align-middle">
              <img src={ProfilePic} alt="profile" className=" w-[100px] h-[100px] mb-5" />
              <div className="text-white text-2xl font-semibold text-right">Software engineer proficient in web and mobile development</div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Subbento5() {
  return (<>
  <div className="flex flex-col p-5 h-full">
    <div className=" h-4/5 flex flex-row justify-center transform duration-500 ease-in-out hover:scale-110">
      <img src={Subbento5Svg} alt="subbento5_svg"/>
    </div>
    <div className="h-1/5 text-white text-2xl font-semibold text-center">Skilled in  web design and development</div>
  </div>
  </>);
}

export function Subbento6() {
  return (<>
    <div className="text-white text-2xl font-semibold text-center p-5 flex flex-row justify-center h-full items-center">
      Bachelor of Computer Science (Software Engineering) With Hons.
    </div>
    </>);
}
