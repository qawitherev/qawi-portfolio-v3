import HeroSvg from "../assets/svg/hero_svg.svg";
import { DownloadResume } from "../utils/DownloadResume";
import { MailMe } from "../utils/MailMe";
import { DefaultButton } from "./generics/ButtonVariants";

export function Hero() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row justify-center md:mx-0 mx-10'>
        <div className='flex-1 flex flex-col space-y-1 text-white justify-end pb-36' >
          <p className='font-base md:text-4xl text-3xl mb-5 md:text-start text-center'>Hi, I am Abdul Qawi</p>
          <p className='font-bold md:text-6xl text-4xl md:text-left text-center'>A Multi-Tech</p>
          <p className='font-bold md:text-6xl text-4xl md:pb-10 pb-3 md:text-left text-center'>Stack Master</p>
          <div className='flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-3' >
            <DefaultButton buttonText="Get Resume" onClick={DownloadResume} />
            <DefaultButton buttonText="Email Me" onClick={MailMe} />
          </div>
        </div>
        <div className='flex-1' >
          <img src={HeroSvg} alt="hero_svg" className='w-full' />
        </div>
      </div>
    </>
  );
}
