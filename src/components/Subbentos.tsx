import Subbento0Svg from "../assets/svg/subbento0.svg";
import Subbento2Svg from "../assets/svg/subbento2.svg";
import Subbento3_0Svg from "../assets/svg/subbento3_0.svg";
import Subbento3_1Svg from "../assets/svg/subbento3_1.svg";
import Subbento3_2Svg from "../assets/svg/subbento3_2.svg";
import Subbento3_3Svg from "../assets/svg/subbento3_3.svg";
import Subbento4Svg from "../assets/svg/subbento4.svg";
import ProfilePic from "../assets/svg/profile_pic.png";
import Subbento5Svg from "../assets/svg/subbento5.svg";
import { MailMe } from "../utils/MailMe";

export function Subbento0() {
  return (
    <>
      <div className="flex flex-row h-full">
        <div className="w-2/3 flex flex-row justify-center items-center">
          <p className="text-white font-semibold md:text-2xl text-lg">
            2 Companies Served
          </p>
        </div>
        <div className="w-1/3 transform ease-in-out duration-500 hover:scale-110 flex md:mr-0 mr-4">
          <img
            src={Subbento0Svg}
            alt="subbento0_svg"
            className=" md:scale-150"
          />
        </div>
      </div>
    </>
  );
}

export function Subbento1() {
  return (
    <>
      <div className="flex flex-col h-full justify-center p-3">
        <div className=" text-white font-semibold md:text-2xl text-xl text-center md:mb-2 mb-1">
          6
        </div>
        <div className=" text-white font-semibold md:text-2xl text-xl text-center md:mb-5 mb-3">
          Total Projects
        </div>
        <div className="font-semibold md:text-lg text-base text-gray-500 text-center tracking-wider">
          and counting!
        </div>
      </div>
    </>
  );
}

export function Subbento2() {
  return (
    <>
      <div className="flex md:flex-col flex-row h-full justify-center">
        <div className="text-white font-semibold md:text-2xl text-lg md:text-center text-left md:mx-6 md:ml-0 ml-4 md:h-1/2 flex items-center">
          <p>Proficient in native and cross platform mobile development</p>
        </div>
        <div className="flex flex-grow md:justify-center">
          <img
            src={Subbento2Svg}
            alt="subbento2_svg"
            className="w-full transform duration-500 ease-in-out hover:scale-110 md:pr-0 pr-2"
          />
        </div>
      </div>
    </>
  );
}

export function Subbento3() {
  interface Social {
    imgSrc: string;
    onSocialClicked: () => void;
  }
  const socialList: Social[] = [
    {
      imgSrc: Subbento3_0Svg,
      onSocialClicked() {
        window.open('https://linkedin.com/in/abdul-qawi-bin-kamran', '_blank')
      },
    },
    {
      imgSrc: Subbento3_1Svg,
      onSocialClicked() {
        window.open('https://github.com/qawitherev', '_blank')
      },
    },
    {
      imgSrc: Subbento3_2Svg,
      onSocialClicked() {
        MailMe()
      },
    },
    {
      imgSrc: Subbento3_3Svg,
      onSocialClicked() {
        window.open('tel:0168284082')
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col h-full justify-center p-5">
        <div className="text-center font-semibold text-white md:text-2xl text-xl md:mb-5 mb-6">
          More ways to reach out!
        </div>
        <div className="flex md:flex-col flex-row justify-around md:space-y-5 items-center">
          {socialList.map((item, i) => (
            <div onClick={item.onSocialClicked}>
              <img
                key={i}
                src={item.imgSrc}
                alt={`${item}_svg`}
                className="transform duration-500 ease-in-out hover:scale-150"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function Subbento4() {
  return (
    <>
      <div className="relative h-full p-5">
        <div className="absolute left-0 bottom-0 md:w-2/3 w-1/3">
          <img
            src={Subbento4Svg}
            alt="subbento4_svg"
            className="w-full transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="absolute right-0 h-fit md:w-1/2 w-3/4">
          <div className="flex flex-col justify-center items-end mr-5 h-full align-middle">
            <img
              src={ProfilePic}
              alt="profile"
              className="md:w-[100px] md:h-[100px] w-[50px] h-[50px] md:mb-5 mb-2"
            />
            <div className="text-white md:text-2xl text-lg font-semibold text-right">
              Software engineer proficient in web and mobile development
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Subbento5() {
  return (
    <>
      <div className="flex md:flex-col flex-row p-5 h-full">
        <div className=" md:h-4/5 h-full md:mr-0 mr-3 flex flex-row justify-center transform duration-500 ease-in-out hover:scale-110">
          <img src={Subbento5Svg} alt="subbento5_svg" />
        </div>
        <div className="md:h-1/5 h-full flex items-center text-white md:text-2xl text-lg font-semibold md:text-center text-right">
          Skilled in web design and development
        </div>
      </div>
    </>
  );
}

export function Subbento6() {
  return (
    <>
      <div className="text-white md:text-2xl text-lg font-semibold text-center p-5 flex flex-row justify-center h-full items-center">
        Bachelor of Computer Science (Software Engineering) With Hons.
      </div>
    </>
  );
}
